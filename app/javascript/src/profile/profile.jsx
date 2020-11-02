// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';

import './profile.scss';


class Profile extends React.Component  {

  state = {
    user: []
  }

  componentDidMount() {
    fetch('/api/users')
      .then(handleErrors)
      
  }
  // get user params 



  render() {
    return (
      <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">

          </div>
        </div>
      </div>
      </Layout>
    )
  }
} 

export default Profile;