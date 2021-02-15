import React from 'react'
import { safeCredentials, handleErrors } from '@utils/fetchHelper'
// def stripe api 

export default class UserCheckoutWidget extends React.Component {
  state = {
    authenticated: false,
    booking: {}
  }

  componentDidMount() {
    fetch('/api/authenticate')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
    this.getBooking();
  }

  getBooking = () => {
    fetch(`/api/bookings/${this.props.booking_id}`)
      .then(handleErrors)
      .then(data => {
        console.log(data);
        this.setState({
          booking: data.booking,
        })
      })
  }

  initiateStripeCheckout = (booking_id) => {
    return fetch(`/api/charges?booking_id=${booking_id}&cancel_url=${window.location.pathname}`, safeCredentials({
      method: 'PUT',
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

    const { authenticated,error } = this.state
    
    return(
    <div className="UserCheckoutWidget">
      <button onSubmit={this.submitBooking} type="submit" 
        className="btn btn-small btn-danger">Unpaid</button>
    </div>)
  }
}