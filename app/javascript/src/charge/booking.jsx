import React from 'react'
import Layout from '@src/layout';


export default class Charge extends React.Component {
  state ={
    booking: {},
    loading: true
  }

  componentDidMount() {
    fetch(`/api/bookings/${this.props.booking_id}`)  
    .then(handleErrors)
      .then(data => {
        this.setState({
          property: data.booking,
          loading: false,
        })
    }) 
  } 
  
  render() {
    return(
      <Layout>
         <div className="container pt-4 mt-4">
           <div className="row pt-4 mt-4">
            <div className="col-md-12 pt-4 mt-4">
              <h1>Booking Successful!</h1>
            </div>
           </div>
        </div>
      </Layout>
    )
  }
}