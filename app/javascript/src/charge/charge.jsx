import React from 'react'
import Layout from '@src/layout'
import { handleErrors } from '@utils/fetchHelper'

class Charge extends React.Component {

    state = {
      charge: {}
    }
    
  componentDidMount() {
    fetch(`/api/charges/${this.props.charge_id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          charge: data.charge,
        })
      })
  }

  render() {

    const {charge} = this.state

    const {
      id,
      checkout_session_id,
      currency,
      amount,
      complete
    } = charge

    return(
      <Layout>
         <div className="container pt-4 mt-4">
           <div className="row pt-4 mt-4">
            <div className="col-md-12 pt-4 mt-4">
              <h1>{charge.amount}</h1>
            </div>
           </div>
        </div>
      </Layout>
    )
  }
}

export default Charge