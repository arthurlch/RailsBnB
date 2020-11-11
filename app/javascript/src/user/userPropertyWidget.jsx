
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';



class userPropertyWidget extends React.Component () {
 
  state = {
    user: {},
  }

  componentDidMount() {
    fetch(`/api/properties/${this.props.user_id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          user: data.property.user.username,
          loading: false,
        })
      }) 
  }

  render() {
    const { user } = this.state;

    return (
      <div></div>
    )

  }

}















 getUserPropertyBookings = () => {
  fetch(`/api/properties/${this.props.property_id}/bookings`)
    .then(handleErrors)
    .then(data => {
      console.log(data);
      this.setState({
        existingBookings: data.bookings,
      })
    })
}