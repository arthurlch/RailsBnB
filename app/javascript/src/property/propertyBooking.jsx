import React from 'react' 
import { handleErrors, safeCredentialsForm } from '@utils/fetchHelper';

export default class propertyBooking extends React.Component {
  
  state ={
    bookings: {},
    authenticated: false,
  }

  componentDidMount() {
    this.isAuthenticated()
    this.getPropertyBookings()
  }

  isAuthenticated() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  getPropertyBookings() {
    fetch(`/api/properties/${this.props.property_id}`)  
    .then(handleErrors)
      .then(data => {
        this.setState({
          property: data.property,
          loading: false,
        })
    }) 
  }

  render() {
    return(
    <div></div>)
  }
}