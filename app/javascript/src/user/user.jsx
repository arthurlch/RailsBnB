// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './user.scss';


class User extends React.Component  {

  state = {
    authenticated: false,
    existingBookings: []
  }

  componentDidMount() {
    fetch(`/api/users/${this.props.user_id}`)
      .then(handleErrors)
      
  }





  render() {
    return (
      <Layout>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12">
            <h2>User Component</h2>
          </div>
        </div>
      </div>
      </Layout>
    )
  }
} 

export default User;