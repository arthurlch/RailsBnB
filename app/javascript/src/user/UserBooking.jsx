import React from 'react'
import './user.scss'
import { handleErrors } from '@utils/fetchHelper'
import UserCheckoutWidget from './UserCheckoutWidget'

class UserBooking extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      bookings: [],
      show: false
    }
    
    this.getUser = this.getUser.bind(this)
    this.getBooking = this.getBooking.bind(this)
  }
    
  componentDidMount() {
    this.getUser()
    this.getBooking()
  }
  
  getUser() {
    fetch(`/api/users/${this.props.user_id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          user: data.user,
          loading: false,
        })
      }) 
  }

  getBooking() {
    fetch('/api/bookings')
      .then(handleErrors)
      .then(data => {
        console.log(data)
        this.setState({
          bookings: data.bookings,
          loading: false,
        })
      }) 
  }

  
  _showForm = (bool) => {
    this.setState({
      showForm: bool
    });
  }

  render() {
  
    const { show, bookings, user } = this.state;
    return (
      <div className="">
        <div className="my-3">
          <h3>My Bookings:</h3>
          {bookings.map(booking => 
          <ul className="my-4 py-3" key={booking.id}> 
            <li>Booking ID {booking.id}</li>
            <li>Check-in {booking.start_date}</li>
            <li>Check-out {booking.end_date}</li>
            <li>Your booking is {booking.is_paid ? 
            "Paid" : <UserCheckoutWidget booking_id={booking.id}/>}
            </li>
          </ul>)}
        </div>
      </div>
    )
  }
}

export default UserBooking