// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import UserProperty from './UserProperty'
import UserBooking from './UserBooking'

/* user page, from this page user can add a property, see it's bookings as a guest, going to
  checkout for its bookings if user didnt pay yet the booking, via stripe
  go to its properties page to see what bookings are made by the guest.


  Todo: 

  conditional rendering to do! 
  so we can hide users info using api/auth  
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
      return <p>loading..., comeback to homepage: 
        <a href="https://railsbnb1.herokuapp.com/">here</a></p>;
    };

    const {
      id,
      username,
      email,
      properties,
      bookings
    } = user  

    return (
      <Layout user_id={user.id}>
        <div className="container pt-4 mt-4 ">
        <div className="row pt-4 mt-4">
          <h2>Welcome {user.username}</h2>
          <div className="col-md-12 pt-4 mt-4">
          <UserProperty user_id={id}/>
          {bookings.length = 0 ?  <UserBooking user_id={id} booking_id={id} /> : null}
          </div>
        </div>
        </div> 
      </Layout>
    )   
  }
} 

