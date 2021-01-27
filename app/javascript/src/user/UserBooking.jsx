import React from 'react'
import './user.scss'
import { handleErrors } from '@utils/fetchHelper'
import { data } from 'jquery'

class UserBooking extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      booking: {},
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
    fetch('/api/bookings')
      .then(handleErrors)
      .then(data => {
        this.setState({
          booking: data.booking,
          loading: false,
        })
      }) 
      .then(console.log(data))  
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

    return (
      <div className="">
        <div className="my-3">
        
        </div>
      </div>
    )
  }
}

export default UserBooking