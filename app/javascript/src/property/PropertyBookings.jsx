import React from 'react'
import { handleErrors } from '@utils/fetchHelper'

export default class PropertyBookings extends React.Component {
  
  state = {
    property: {},
    authenticated: false,
    loading: false
  }
  
  componentDidMount() {
    this.propertyData()
    this.isAuthenticated()
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
    const { property, loading, authenticated } = this.state;
    
    if (loading) {
      return <p>loading...</p>;
    }
    
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
      </div>
    )
  }
} 