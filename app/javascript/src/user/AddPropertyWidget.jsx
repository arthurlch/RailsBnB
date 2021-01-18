import React from 'react' 
import { handleErrors, safeCredentialsForm } from '@utils/fetchHelper';
// fetch from property api and post to property api instead of user.properties 
export default class UserPropertyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      id: "",
      images: [],
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
      image_url: ""
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
   // e.preventDefault()
    let formData = new FormData();
    for (let i = 0; i < images.files.length; i++) {
      formData.append('property[images][]', images.files[i]);
    }

    // Set other params in the formData
    formData.set('property[id]', this.state.id);
    formData.set('property[title]', this.state.title);
    formData.set('property[description]', this.state.description);
    formData.set('property[title]', this.state.title);
    formData.set('property[city]', this.state.city);
    formData.set('property[country]', this.state.country);
    formData.set('property[property_type]', this.state.property_type);
    formData.set('property[price_per_night]', this.state.price_per_night);
    formData.set('property[max_guests]', this.state.max_guests);
    formData.set('property[bedrooms]', this.state.bedrooms);
    formData.set('property[beds]', this.state.beds);
    formData.set('property[baths]', this.state.baths);
    formData.set('user[user_id]', this.props.user_id);

    fetch(`/api/properties`, safeCredentialsForm({
      method: 'POST',
      body: formData,
    })).then(handleErrors)
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

        <div className="form-group">
          <label className="col" htmlFor="images">Images:</label>
          <input className="form-control form-control-sm" id="images" type="file"
            rows="1" name="images" value={this.state.images || ''} onChange={this.handleChange}/>
        </div>

        <button className="btn btn-sm btn-danger" type="submit">Submit</button>
      </form>
    </div>
  )
 }
}