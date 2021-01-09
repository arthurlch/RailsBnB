import React from 'react';
import UserAddPropertyForm from './UserAddPropertyForm'
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
    // this.addProperty = this.addProperty.bind(this)
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

/*  addProperty(newProperty) {
    this.setState(state => ({
      properties: [...state.properties, new newProperty]
    }))
  } */


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
            <button className="btn btn-sm btn-info">Edit</button>
          </ul>)} 
        </div>
 
        <div>
          <h4 className="py-4 my-4">Become a host today and add a property to your account!</h4>
          <button className="btn btn-sm btn-info mx-3" onClick={this._showForm.bind(null, true)}>Add Property</button>
          <button className="btn btn-sm" onClick={this._showForm.bind(null, false)}>Hide Form</button>
          { this.state.showForm && (
            <div className="UserPropertyForm">
              <UserAddPropertyForm user_id={id}/>
            </div>)
            }
        </div>

      </div>
    )
  }
}

export default UserProperty













 