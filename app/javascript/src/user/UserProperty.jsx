// UserProperty.jsx
import React from 'react'
import './user.scss'
import AddPropertyWidget from './AddPropertyWidget'
import { handleErrors } from '@utils/fetchHelper'

/* 
List the property that the user own and include the add property if user want to 
add a property to its listing.
*/
export default class UserProperty extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      loading: true,
      show: false
    }
    this.getUser = this.getUser.bind(this)
  }
    
  componentDidMount() {
    this.getUser()
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

  _showForm = (bool) => {
    this.setState({
      showForm: bool
    });
  }

  render() {
    const { user, loading } = this.state;
    if (loading) {
      return <p>loading...</p>
    };

    const {
      id,
      properties,
      bookings,
    } = user  

    return (
      <div className="">
        <div className="my-3">
          <h3>My Properties:</h3>
          {properties.map(property => 
          <ul className="my-4 py-3" key={property.id}> 
            <li><span className="font-weight-bold">Name:</span> {property.title}</li>
            <li>Description: {property.description}</li>
            <li>City: {property.city}</li>
            <li>Country: {property.country}</li>
            <li>type: {property.property_type}</li>
            <li>Price per night: {property.price_per_night}</li>
            <li>Max of guest: {property.max_guests}</li>
            <li>Bedrooms: {property.bedrooms}</li>
            <li>Beds: {property.beds}</li>
            <li>Baths: {property.baths}</li>
            <div>
              <button className="btn btn-sm btn-info mx-3" onClick={this._showForm.bind(null, true)}>
                <a href={`/property/${property.id}`}>Edit Property</a>
              </button>
            </div>
          </ul>)} 
        </div>

        <div>
          <h4 className="py-4 my-4">Become a host today and add a property to your account!</h4>
          <button className="btn btn-sm btn-info mx-3" onClick={this._showForm.bind(null, true)}>Add Property</button>
          <button className="btn btn-sm" onClick={this._showForm.bind(null, false)}>Hide Form</button>
          { this.state.showForm && (
            <div className="UserPropertyForm">
              <AddPropertyWidget user_id={id}/>
            </div>)
            }
        </div>
      </div>
    )
  }
}














 