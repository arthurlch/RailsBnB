import React from 'react' 

export default class UserPropertyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      city: "",
      country: "",
      property_type: "",
      price_per_night: "",
      max_guests: "",
      bedrooms: "",
      beds: "",
      baths: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  
  getUserAPI = `/api/users/${this.props.user_id}`

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  
  }
  

 render () {
   
   return(
     <div className="py-4 my-4 row">
      <form onSubmit={this.handleSubmit} id="userPropertyForm">
        
        <div className="form-group">
          <label className="col" htmlFor="form-property-title">Property Title</label>
          <input className="form-control form-control-sm" id="form-property-title" 
            rows="1" name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="form-property-description">Property Description</label>
          <textarea className="form-control form-control-sm" id="form-property-description" 
            rows="2" name="description" onChange={this.handleChange}></textarea>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="form-property-city">Property City</label>
          <input className="form-control form-control-sm" id="form-property-city"
             rows="3" name="city" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <label className="col" htmlFor="form-property-country">Property Country</label>
          <input className="form-control form-control-sm" id="form-property-country" 
            rows="1" name="country" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="form-property-type">Property type</label>
          <input className="form-control form-control-sm" id="form-property-type" 
            rows="1" name="property_type" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="price_per_night">Price per Night</label>
          <input className="form-control form-control-sm" id="price-per-night" 
            rows="1" name="price_per_night" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="max_guests">Max guests</label>
          <input className="form-control form-control-sm" id="max-guests" 
            rows="1" name="max_guests" onChange={this.handleChange}/>
        </div>

        <button className="btn btn-sm btn-danger" type="submit">Submit</button>
      </form>
     </div>
    
   )
 }

}