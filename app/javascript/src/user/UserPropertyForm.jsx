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
  const {
    properties
  } = user  

   return(
     <div className="py-4 my-4 row">
      <form onSubmit={this.handleSubmit} id="userPropertyForm">
        
        <div className="form-group">
          <label className="col" htmlFor="title">Property Title</label>
          <input className="form-control form-control-sm" id="form-property-title" 
            rows="1" name="property_title" type="text" value={property.title}/>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="description">Property Description</label>
          <textarea className="form-control form-control-sm" id="form-property-description" 
            rows="2" name="property_description" ref="property_description"></textarea>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="city">Property City</label>
          <input className="form-control form-control-sm" id="form-property-city"
             rows="3" name="property_city" ref="property_city"/>
        </div>
        
        <div className="form-group">
          <label className="col" htmlFor="country">Property Country</label>
          <input className="form-control form-control-sm" id="form-property-country" 
            rows="1" name="property_country" ref="property_country" />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="property_type">Property type</label>
          <input className="form-control form-control-sm" id="form-property-type" 
            rows="1" name="property_type" ref="property_type" />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="price_per_night">Price per Night</label>
          <input className="form-control form-control-sm" id="price-per-night" 
            rows="1" name="price_per_night" ref="price_per_night" />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="max_guests">Max guests</label>
          <input className="form-control form-control-sm" id="max-guests" 
            rows="1" name="max_guests" ref="max_guests"/>
        </div>

        <button className="btn btn-sm btn-danger" type="submit">Submit</button>
      </form>
     </div>
    
   )
 }

}