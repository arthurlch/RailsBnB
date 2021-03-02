import React from 'react'
import { handleErrors } from '@utils/fetchHelper'

export default class PropertyBookings extends React.Component {
  // due to memory leak bug React use of _isMounted is needed doc link below
  // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component 
  _isMounted = false
  
  state = {
    property: {},
    authenticated: false,
  }
  
  componentDidMount() {
    this._isMounted = true
    this.propertyData()
    this.isAuthenticated()
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  propertyData = () => {
    fetch(`/api/properties/${this.props.property_id}`)  
    .then(handleErrors)
      .then(data => {
        this.setState({
          property: data.property,
          loading: false,
        })
    }) 
  }

  isAuthenticated = () => {
    fetch('/api/authenticated')
    .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
    })
  }

  render() {
    const { property, authenticated } = this.state;
    
    if (!authenticated) {
      return (
        <div className="border p-4 mb-4">
          Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to see Bookings.
        </div> 
      )
    }

    const { bookings } = property

    return (
      <div className="propertyBooking">
        <div className="py-4 row">
          <h4>Properties bookings</h4>
          <div className="col col-md-12">
          {bookings.map(booking => 
          <ul key={property.id}>
            <li>Booking ID: {booking.id}</li>
            <li>Booking Date: Start {booking.start_date} & End {booking.end_date}</li>
            <li>Booking paiement status: {booking.is_paid?  "Paid": "Unpaid"}</li>
            <li>Booked by : {booking.user.username}</li>
          </ul>
          )}
          </div>
        </div>
      </div>
    )
  }
} 