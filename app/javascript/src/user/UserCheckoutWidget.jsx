import React from 'react'
import { safeCredentials, handleErrors } from '@utils/fetchHelper'

export default class UserCheckoutWidget extends React.Component {
  state = {
    authenticated: false,
    existingBookings: [],
    focusedInput: null,
    error: false,
  }

  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
    this.getPropertyBookings();
  }

  getPropertyBookings = () => {
    fetch(`/api/properties/${this.props.property_id}/bookings`)
      .then(handleErrors)
      .then(data => {
        console.log(data);
        this.setState({
          existingBookings: data.bookings,
        })
      })
  }

  initiateStripeCheckout = (booking_id) => {
    return fetch(`/api/charges?booking_id=${booking_id}&cancel_url=${window.location.pathname}`, safeCredentials({
      method: 'POST',
    }))
      .then(handleErrors)
      .then(response => {
        const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);

        stripe.redirectToCheckout({
          // Make the id field from the Checkout Session creation API response
          // available to this file, so you can provide it as parameter here
          // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
          sessionId: response.charge.checkout_session_id,
        }).then((result) => {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        });
      })
      .catch(error => {
        console.log(error);
      })
  }

  submitBooking(e) {
    if (e) { e.preventDefault() }
      this.initiateStripeCheckout(response.booking.id)
  }

  render() {

    const { authenticated, existingBookings, focusedInput, error } = this.state
    
    return(
    <div className="UserCheckoutWidget">
      <form onSubmit={this.submitBooking}>
          <button type="submit" className="btn btn-small btn-danger">Unpaid</button>
        </form>
    </div>)
  }
}