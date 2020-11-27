// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import UserPropertyWidget from './UserPropertyWidget'



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
          <h2>User Profile</h2>
          <div className="col-md-12 pt-4 mt-4">
            <div className="my-3">
              <h3>Name:</h3>
              <p>{user.username}</p>
            </div>
            <div className="my-3">
              <h3>Email:</h3>
              <p>{user.email}</p>
            </div>
            <UserPropertyWidget  />
            <div className="my-3">
            <h3>Your Booking</h3>
            {bookings.map(booking => 
            <p key={booking.start_date}> Booking finish the  {booking.end_date} </p>)} 
            </div>
            
          </div>
          <div className="col-md-6">

          </div>
        </div>
          
        </div> 
      </Layout>
    )
     
      
  }
} 

export default User;