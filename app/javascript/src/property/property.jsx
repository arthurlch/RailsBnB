// property.jsx
import React from 'react'
import Layout from '@src/layout'
import BookingWidget from './bookingWidget'
import PropertyBookings from './PropertyBookings'
import EditPropertyWidget from './EditPropertyWidget'
import { handleErrors } from '@utils/fetchHelper'
import './property.scss'

export default class Property extends React.Component {
  state = {
  property: {},
  loading: true,
  }

  componentDidMount() {
    fetch(`/api/properties/${this.props.property_id}`)  
    .then(handleErrors)
      .then(data => {
        this.setState({
          property: data.property,
          loading: false,
        })
    }) 
  } 

  _showForm = (bool) => {
    this.setState({
      showForm: bool
    })
  }

  render () {
    const { property, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    }

    const {
      id,
      title,
      description,
      city,
      country,
      property_type,
      price_per_night,
      max_guests,
      bedrooms,
      beds,
      baths,
      images,
      user,
      image_url,
    } = property

    return (
      <Layout>
        <div className="property-image-url" style={{ backgroundImage: `url(${image_url})` }} />
        <div className="property-image">
        {images.map(image => {
          return (<img className="property-image" src={image.image_url}/>)
        })}
        </div>
        <div className="container">
          <div className="row">
            <div className="info col-12 col-lg-7">
              <div className="mb-3">
                <h3 className="mb-0">{title}</h3>
                <p className="text-uppercase mb-0 text-secondary"><small>{city}</small></p>
                <p className="mb-0"><small>Hosted by <b>{user.username}</b></small></p>
              </div>
              <div>
                <p className="mb-0 text-capitalize"><b>{property_type}</b></p>
                <p>
                  <span className="mr-3">{country}</span>
                  <span className="mr-3">{max_guests} guests</span>
                  <span className="mr-3">{bedrooms} bedroom</span>
                  <span className="mr-3">{beds} bed</span>
                  <span className="mr-3">{baths} bath</span>
                </p>
              </div>
              <hr />
              <p>{description}</p>
              
              <button className="btn btn-sm btn-info mx-3" onClick={this._showForm.bind(null, true)}>Edit Property</button>
              <button className="btn btn-sm" onClick={this._showForm.bind(null, false)}>Hide Form</button>
              { this.state.showForm && (
                
                <div className="EditPropertyWidget">
                  <p className="mt-4">Please fill the whole form before to submit</p>
                  <EditPropertyWidget property_id={id} />
                </div>)
                }
            </div>

            <div className="col-12 col-lg-5">
              <BookingWidget property_id={id} price_per_night={price_per_night} />
            </div>

            <div className="col-12 col-lg-5">
              <PropertyBookings property_id={id} />
            </div>     

          </div>
        </div>
      </Layout>
    )
  }
}
