import React from 'react'
import Layout from '@src/layout'
import { handleErrors } from '@utils/fetchHelper'

export default class Charge extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      charge: {},
      booking: {}
    }
    this.getCharge = this.getCharge.bind(this)
  }
   
  componentDidMount() {
    this.getCharge()
  }

  getCharge() {
    fetch(`/api/charges/${this.props.charge_id}`)
    .then(handleErrors)
    .then(data => {
      this.setState({
        charge: data.charge,
      })
    })
  }

  render() {

    const {charge, booking} = this.state
    
    return(
      <Layout>
         <div className="container pt-4 mt-4">
           <div className="row pt-4 mt-4">
            <div className="col-md-12 pt-4 mt-4">
              <h2>{charge.complete? "You're paiement is successful"
              :"Your paiement failed"}</h2>
              <p>Amount paid: {charge.amount} {charge.currency}</p>
            </div>
           </div>
        </div>
      </Layout>
    )
  }
}

