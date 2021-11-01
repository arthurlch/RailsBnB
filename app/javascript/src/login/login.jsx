// login.jsx
import React from 'react'
import Layout from '@src/layout'
import LoginWidget from './loginWidget'
import SignupWidget from './signupWidget'
import LogoutWidget from './logoutWidget'
import { handleErrors } from '@utils/fetchHelper';

/* 
  Login client side
  User api endpoit /api/authenticated to verify credits of user 
*/

export default class Login extends React.Component {
  state = {
    authenticated: false,
    show_login: true,
  }

  // mount api authenticated 
  componentDidMount() {
    fetch('/api/authenticated')
      .then(handleErrors)
      .then(data => {
        this.setState({
          authenticated: data.authenticated,
        })
      })
  }

  toggle = () => {
    this.setState({
      show_login: !this.state.show_login,
    })
  }



  render () {
    const { authenticated, show_login } = this.state;
    if (authenticated) {
      return (
        <Layout>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
                <div className="border p-4">
                  <p className="mb-0">You are already logged in 🙂</p>
                  <div className="logout-widget" style={{
                    paddingTop: '10px',
                    marginTop: '10px',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center'
                    }}>
                    <LogoutWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )
    }

    return (
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9 col-lg-6 mx-auto my-4">
              <div className="border p-4">
                {show_login ? <LoginWidget toggle={this.toggle} /> : <SignupWidget toggle={this.toggle} />}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}