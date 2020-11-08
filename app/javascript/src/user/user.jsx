// user.jsx
import React from 'react';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './user.scss';


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
      email
    } = user

    return (
      <Layout>    
        <div>
          <h2 key={user.id}>{user.username}</h2>
        </div> 
      </Layout>
    )
     
      
  }
} 

export default User;