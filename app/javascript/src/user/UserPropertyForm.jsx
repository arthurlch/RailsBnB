import React from 'react' 
import { safeCredentials, handleErrors } from '@utils/fetchHelper';

// fetch from property api and post to property api instead of user.properties 
export default class UserPropertyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      id: 34,
      title: "",
      description: "",
      city: "",
      country: "",
      property_type: "",
      price_per_night: "",
      max_guests: "",
      bedrooms: "",
      beds: "",
      baths: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(e) {
   e.preventDefault()

   fetch(`/api/properties`, safeCredentials({
    method: 'POST',
      body: JSON.stringify({
        property: {
          id: this.state.id,
          title: this.state.title,
          description: this.state.description,
          city: this.state.city,
          country: this.state.country,
          property_type: this.state.property_type,
          price_per_night: this.state.price_per_night,
          max_guests: this.state.max_guests,
          bedrooms: this.state.bedrooms,
          beds: this.state.beds,
          baths: this.state.baths,
        }
      })
  }))
    .then(handleErrors)
    .catch(error => {
      console.log(error);
    })
  }
  
 render () {
   return(
     <div className="py-4 my-4 row">
      <form onSubmit={this.handleSubmit} id="userPropertyForm">
        
        <div className="form-group">
          <label className="col" htmlFor="title">Name:</label>
          <input className="form-control form-control-sm" id="title" 
            rows="1" name="title" value={this.state.title || ''} onChange={this.handleChange}/>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="form-property-description">Description:</label>
          <textarea className="form-control form-control-sm" id="form-property-description" 
            rows="2" name="description" value={this.state.description || ''} onChange={this.handleChange}></textarea>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="form-property-city">City:</label>
          <input className="form-control form-control-sm" id="form-property-city"
             rows="3" name="city" value={this.state.city || ''} onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <label className="col" htmlFor="form-property-country">Country:</label>
          <input className="form-control form-control-sm" id="form-property-country" 
            rows="1" name="country" value={this.state.country || ''} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="form-property-type">Property type:</label>
          <input className="form-control form-control-sm" id="form-property-type" 
            rows="1" name="property_type" value={this.state.property_type || ''} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="price_per_night">Price per Night:</label>
          <input className="form-control form-control-sm" id="price-per-night" 
            rows="1" name="price_per_night" type="number" pattern="[0-9]*"
            value={this.state.price_per_night || ''} onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="col" htmlFor="max_guests">Max guests:</label>
          <input className="form-control form-control-sm" id="max-guests" type="number" pattern="[0-9]*" 
            rows="1" name="max_guests" value={this.state.max_guests || ''} onChange={this.handleChange}/>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="bedrooms">Bedrooms:</label>
          <input className="form-control form-control-sm" id="bedrooms" type="number" pattern="[0-9]*"
            rows="1" name="bedrooms" value={this.state.bedrooms || ''} onChange={this.handleChange}/>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="beds">Beds:</label>
          <input className="form-control form-control-sm" id="beds" type="number" pattern="[0-9]*"
            rows="1" name="beds" value={this.state.beds || ''} onChange={this.handleChange}/>
        </div>

        <div className="form-group">
          <label className="col" htmlFor="baths">Baths:</label>
          <input className="form-control form-control-sm" id="baths" type="number" pattern="[0-9]*"
            rows="1" name="baths" value={this.state.baths || ''} onChange={this.handleChange}/>
        </div>

        <button className="btn btn-sm btn-danger" type="submit">Submit</button>
      </form>
     </div>
    
   )
 }

}