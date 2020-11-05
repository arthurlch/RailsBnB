// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './profile.scss';


class Profile extends React.Component  {

  state = {
    authenticated: false,
    existingBookings: []
  }

  componentDidMount() {
    fetch('/api/users/show')
      .then(handleErrors)
      
  }





  render() {
    return (
      <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Profile Component</h2>
          </div>
        </div>
      </div>
      </Layout>
    )
  }
} 

export default Profile;