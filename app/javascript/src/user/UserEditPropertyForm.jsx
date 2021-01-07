import React from 'react' 
import { safeCredentials, handleErrors, safeCredentialsForm } from '@utils/fetchHelper'; 

export default class UserEditPropertyForm extends React.Component {
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

    handleSubmit(event) {
        
    fetch(`/api/properties`, safeCredentialsForm({
        method: 'PUT',
        body: formData,
      })).then(handleErrors)
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        return(
            <div className="container">
                
            </div>
        )
    }













}