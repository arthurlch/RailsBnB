// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import UserProperty from './UserProperty'
import UserBooking from './UserBooking'

/* user page, from this page user can add a property, see it's bookings as a guest, going to
  checkout for its bookings if user didnt pay yet the booking, via stripe
  go to its properties page to see what bookings are made by the guest.
*/

export default class User extends React.Component  {
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
            <UserBooking user_id={id} booking_id={id} />
          </div>
        </div>
        </div> 
      </Layout>
    )   
  }
} 

