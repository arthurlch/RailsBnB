import React from 'react' 
import { handleErrors, safeCredentialsForm } from '@utils/fetchHelper';

export default class PropertyBooking extends React.Component {
  
  constructor(props){
    super(props)
    this.state ={
      authenticated: false,
      property: {}
    }
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

    const { authenticated, property } = this.state;
    if (!authenticated) {
      return (
        <div className="border p-4 mb-4">
          Please <a href={`/login?redirect_url=${window.location.pathname}`}>log in</a> to go checkout.
        </div>
      )
    }

    const {
      bookings
    } = property

    return(
    <div className="PropertyBooking">
      <p>Property's Bookings :</p>

      {bookings.map(b => {
        <ul>
          <li>{b.id}</li>
        </ul>
      })}
      
    </div>)
  }
}