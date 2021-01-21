// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import UserProperty from './UserProperty'
import UserBooking from './UserBooking'
// memo router needed !!!!!!!!!!


class User extends React.Component  {
  state = {
    user: {},
    loading: true,
  } 

  componentDidMount() {
    fetch(`/api/users/${this.props.user_id}`)
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
      id,
      username,
      email,
      properties,
      bookings
    } = user  

    return (
      <Layout>    
        <div className="container pt-4 mt-4 ">
        <div className="row pt-4 mt-4">
          <h2>User Profile : {user.username}</h2>
          <div className="col-md-12 pt-4 mt-4">
            <UserProperty user_id={id} />
            <UserBooking user_id={id} />
          </div>
        </div>
          
        </div> 
      </Layout>
    )   
  }
} 

export default User;