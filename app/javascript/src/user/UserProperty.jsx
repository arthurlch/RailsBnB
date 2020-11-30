import React from 'react';
import UserPropertyForm from './UserPropertyForm'
import { handleErrors } from '@utils/fetchHelper';

class UserProperty extends React.Component  {
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
      return <p>loading...</p>;
    };

    const {
      properties
    } = user  

    return (
      <div className="">
        <div className="my-3">
          <h3>Your Properties:</h3>
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
            <button className="btn btn-sm btn-info">Edit</button>
          </ul>)} 
        </div>
        <div>
        <button className="btn btn-sm btn-info" onClick={this._showForm.bind(null, true)}>Add Property</button>
        <button className="btn btn-sm btn-info" onClick={this._showForm.bind(null, false)}>Hide Form</button>
        { this.state.showForm && (<div><UserPropertyForm/></div>) }
      </div>
      </div>
    )

  }
}

export default UserProperty













 