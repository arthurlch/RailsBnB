import React from 'react';
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

export default class LogoutWidget extends React.Component {

  state = {
    session: {},
    error: ``
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  logout = (e) => {
    if (e) { e.preventDefault(); }
    this.setState({
      error: '',
    });

    fetch(`api/sessions/${this.props.user_id}`, safeCredentials({
      method: 'DELETE',
    }))
      .then(handleErrors)
      .then(data => {
        if (data.success) {
          const params = new URLSearchParams(window.location.search);
          const redirect_url = params.get('redirect_url') || '/';
          window.location = redirect_url;
        }
      })
      .catch(error => {
        this.setState({
          error: 'Could not logout.',
        })
      })
  }

 render() {     
  const { error } = this.state;

   return (
    <React.Fragment>
      <form onSubmit={this.logout}>
        <button type="submit" className="btn btn-outline-danger btn-block btn-sm">Logout</button>
        {error && <p className="text-danger mt-2">{error}</p>}
      </form>
    </React.Fragment>     
   )
 }

}