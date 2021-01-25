import React from 'react'
import './user.scss'
import { handleErrors } from '@utils/fetchHelper'

class UserBooking extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      loading: true,
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
    fetch(`/api/bookings/${this.props.booking_id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          user: data.booking,
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
    const { user, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };

    const {
      id,
      properties,
      bookings
    } = user  

    return (
      <div className="">
        <div className="my-3">
          <h3>My Bookings:</h3>
          {bookings.map(booking => 
          <ul className="my-4 py-3" key={booking.id}> 
            <li>{booking.start_date}</li>
            <li>{booking.end_date}</li>
            <li>{booking.is_paid}</li>             
          </ul>)} 
        </div>
      </div>
    )
  }
}

export default UserBooking