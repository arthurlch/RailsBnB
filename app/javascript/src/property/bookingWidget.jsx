// bookingWidget.jsx
import React from 'react'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import { safeCredentials, handleErrors } from '@utils/fetchHelper'
import 'react-dates/lib/css/_datepicker.css'

/* 
  BookingWidget is a widget used to pick dates and perform booking on the page of a porperty
  it use react-dates and moment.js, Stripe Checkout external libraires. 

  External librairies 
  react-dates documentation https://github.com/airbnb/react-dates 
  The dateRangerPicker use moment js https://momentjs.com/ for moments option
  stripe checkout https://stripe.com/docs/payments/checkout  

  Get property data api/properties/${this.props.property_id}/bookings
  Authenticated user throught api/authenticated
  Retrieve existing bookings from api/properties start_date & end_date of bookings
  Display DateRangePicker and setup props and available date for bookings via momentjs 
  Submit booking with POST request when user picked a startDate and endDate 
  POST request initialize StripeCheckout
*/

export default class BookingWidget extends React.Component {

  state = {
    authenticated: false,
    existingBookings: [],
    startDate: null,
    endDate: null,
    focusedInput: null,
    loading: false,
    error: false,
  }

  // user need to be authenticated to see the booking widget
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

  // get property bookings and set actual bookings to existing bookings inside state
  getPropertyBookings = () => {
    fetch(`/api/properties/${this.props.property_id}/bookings`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          existingBookings: data.bookings,
        })
      })
  }

  submitBooking = (e) => {
    if (e) { e.preventDefault(); }
    const { startDate, endDate } = this.state

    fetch(`/api/bookings`, safeCredentials({
      method: 'POST',
        body: JSON.stringify({
          booking: {
            property_id: this.props.property_id,
            start_date: startDate.format('MMM DD YYYY'),
            end_date: endDate.format('MMM DD YYYY'),
          }
        })
    }))
      .then(handleErrors)
      .then(response => {
        return this.initiateStripeCheckout(response.booking.id)
      })
      .catch(error => {
        console.log(error);
      })
  }

  // the code from initiateStripeCheckout can be found inside the checkout stripe doc 
  // https://stripe.com/docs/checkout/integration-builder
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

  onDatesChange = ({ startDate, endDate }) => this.setState({ startDate, endDate })
  onFocusChange = (focusedInput) => this.setState({ focusedInput })

  // We need to filter our existing bookings to know at what time/date user can make bookings
  // For that we use momentjs https://momentjs.com/docs/#/query/
  // exclude booked days between start_date and end_dateblocked days 
  isDayBlocked = day => this.state.existingBookings.filter(b => 
      day.isBetween(b.start_date, b.end_date, null, '[)')).length > 0 

  // exclude start_date from available date
  isDayBlockedInclusive = day => this.state.existingBookings.filter(b =>
    day.isBetween(b.start_date, b.end_date, null, '(]')).length > 0

  render () {
    const { authenticated, startDate, endDate, focusedInput } = this.state;
    if (!authenticated) {
      return (
        <div className="border p-4 mb-4">
          Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to make a booking.
        </div>
      )
    }

    const { price_per_night } = this.props

    let days;
    if (startDate && endDate) {
      days = endDate.diff(startDate, 'days')
    }

    return (
      <div className="border p-4 mb-4">
        <form onSubmit={this.submitBooking}>
          <h5>${price_per_night} <small>per night</small></h5>
          <hr/>
          <div style={{ marginBottom: focusedInput ? '400px': '2rem' }}>
            <DateRangePicker
              startDate={startDate} // momentPropTypes.momentObj or null,
              startDateId="start_date" // PropTypes.string.isRequired,
              endDate={endDate} // momentPropTypes.momentObj or null,
              endDateId="end_date" // PropTypes.string.isRequired,
              onDatesChange={this.onDatesChange}
              focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
              isDayBlocked={this.isDayBlocked} // block already booked dates
              isDayBlocked={this.isDayBlockedInclusive} // include Checkin in blocked days
              minimumNights={1} // Safety measure
              numberOfMonths={1}
            />
          </div>
          {days && (
            <div className="d-flex justify-content-between">
              <p>Total</p>
              <p>${(price_per_night * days).toLocaleString()}</p>
            </div>
          )}
          <button type="submit" className="btn btn-large btn-danger btn-block">Book</button>
        </form>
      </div>
    )
  }
}

