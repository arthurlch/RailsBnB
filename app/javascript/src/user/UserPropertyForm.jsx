import React from 'react' 

export default class UserPropertyForm extends React.Component {
    
  state = {
      user: {}
    }
  
  getUserAPI = `/api/users/${this.props.user_id}`

  handleChange() {

  }

  handleSubmit() {

  }

  

 render () {
   return(
     <form onSubmit={this.handleSubmit} id="userPropertyForm">
        <div className="form-group">
        <button type="submit">Submit</button>
        </div>
     </form>
   )
 }

}