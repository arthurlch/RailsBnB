// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';
import './home.scss';
import homeImg from '../src/image/railsbnbtrip.png'
 
class Home extends React.Component {
  state = {
    properties: [],
    total_pages: null,
    next_page: null,
    loading: true,
    user: {}
  }
  
  componentDidMount() {
    
    fetch('/api/properties?page=1')
      .then(handleErrors)
      .then(data => {
        this.setState({
          properties: data.properties,
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }


  loadMore = () => {
    if (this.state.next_page === null) {
      return;
    }
    this.setState({ loading: true });
    fetch(`/api/properties?page=${this.state.next_page}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          properties: this.state.properties.concat(data.properties),
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }
  
  render () {
    const { user, properties, next_page, loading } = this.state;
    
    const {
      id,
      username,
      email,
      bookings
    } = user 

    return (
      <Layout user_id={this.props.user_id}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <p className="hero-text">Find a place to.. <br/>Relax, <br/>Think, <br/>Ressource yourself</p>
            </div>
            <div className="col-8">
              <img className="homeImg" src={homeImg} alt="railsbnb"/>
            </div>
          </div>  
        </div>
        <div className="container pt-4">
          <h4 className="mb-1">Top-rated places to stay</h4>
          <p className="text-secondary mb-3">Explore some of the best-reviewed stays in the world</p>
          <div className="row">
            {properties.map(property => {
              return (
                <div key={property.id} className="col-6 col-lg-4 mb-4 property">
                  <a href={`/property/${property.id}`} className="text-body text-decoration-none">
                    <div className="property-image mb-1 rounded" style={{ backgroundImage: `url(${property.avatar})` }} />
                    <p className="text-uppercase mb-0 text-secondary"><small><b>{property.city}</b></small></p>
                    <h6 className="mb-0">{property.title}</h6>
                    <p className="mb-0"><small>${property.price_per_night} USD/night</small></p>
                  </a>
                </div>
              )
            })}
          </div>
          {loading && <p>loading...</p>}
          {(loading || next_page === null) ||
            <div className="text-center">
              <button
                className="btn btn-info mb-4"
                onClick={this.loadMore}
              >load more</button>
            </div>
          }
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(
    <Home user_id={data.user_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})