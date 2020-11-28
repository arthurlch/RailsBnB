import React from 'react';
import { handleErrors } from '@utils/fetchHelper';

class UserPropertyWidget extends React.Component  {
  
    state = {
      user: {},
      loading: true,
    }
  
  

  async componentDidMount() {
    await fetch(`/api/users/${this.props.user_id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          user: data.user,
          loading: false,
        })
      }) 
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
      <div className="userPropertyWidget">
        <div className="my-3">
          <h3>Your Properties</h3>
          {properties.map(property => 
          <div 
            className="my-3"
            key={property.id}> 
            Property name : {property.title} 
            <button className="btn btn-sm btn-info ml-2">Edit</button>
          </div>)} 
          <button className="btn btn-info">Add property</button>
        </div>
      </div>
    )

  }
}

export default UserPropertyWidget













 