// layout.js
import React from 'react';
import './layout.scss';
// import {BrowserRouter as Router, Switch, Route } from 'react'
// react router, routing set up in layout.js
const Layout = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>
      
    
      

      {props.children}


      <footer className="container-fluid">
      <div className="row pt-5 d-none d-md-flex footerNav">
        <div className="col-3">
          <h5 className="mb-3">Airbnb</h5>
          <ul className="list-unstyled mb-1">
            <li><a href="#" className="text-secondary">Careers</a></li>
            <li><a href="#" className="text-secondary">Press</a></li>
            <li><a href="#" className="text-secondary">Policies</a></li>
            <li><a href="#" className="text-secondary">Help</a></li>
            <li><a href="#" className="text-secondary">Diversity & Belonging</a></li>
          </ul>
        </div>
        <div className="col-3">
          <h5 className="mb-3">Discover</h5>
          <ul className="list-unstyled mb-1">
            <li><a href="#" className="text-secondary">Trust & Safety</a></li>
            <li><a href="#" className="text-secondary">Travel Credit</a></li>
            <li><a href="#" className="text-secondary">Gift Cards</a></li>
            <li><a href="#" className="text-secondary">Airbnb Citizen</a></li>
            <li><a href="#" className="text-secondary">Business Travel</a></li>
            <li><a href="#" className="text-secondary">Guidebooks</a></li>
            <li><a href="#" className="text-secondary">Airbnbmag</a></li>
            <li><a href="#" className="text-secondary">Events<span className="ml-1 badge badge-info font-weight-light p-1">New</span></a></li>
          </ul>
        </div>
        <div className="col-3">
          <h5 className="mb-3">Hosting</h5>
          <ul className="list-unstyled mb-1">
            <li><a href="#" className="text-secondary">Why Host</a></li>
            <li><a href="#" className="text-secondary">Hospitality</a></li>
            <li><a href="#" className="text-secondary">Responsible Hosting</a></li>
            <li><a href="#" className="text-secondary">Community Center</a></li>
            <li><a href="#" className="text-secondary">Host an Experience<span className="ml-1 badge badge-info font-weight-light p-1">New</span></a></li>
            <li><a href="#" className="text-secondary">Open Homes<span className="ml-1 badge badge-info font-weight-light p-1">New</span></a></li>
          </ul>
        </div>
        <div className="col-3">
          <h5 className="mb-3 social">
            <i className="text-secondary mr-3 fab fa-facebook-f"></i>
            <i className="text-secondary mr-3 fab fa-twitter"></i>
            <i className="text-secondary fab fa-instagram"></i>
          </h5>
          <ul className="list-unstyled mb-1">
            <li><a href="#" className="text-secondary">Terms</a></li>
            <li><a href="#" className="text-secondary">Privacy</a></li>
            <li><a href="#" className="text-secondary">Site Map</a></li>
          </ul>
        </div>
      </div>
      <hr className="d-none d-md-block" />
      <div className="row justify-content-between align-items-center mb-4 mb-md-5 mt-5 mt-md-0 footerBar">
        <div className="col-auto">
          <small className="text-secondary">© Airbnb, Inc.</small>
        </div>
        <div className="col-auto">
          <button className="btn btn-link px-1 text-dark select">
            <small>English <span className="pl-1 angle d-inline-block">&gt;</span></small>
          </button>
          <button className="btn btn-link px-1 text-dark select">
            <small>USD <span className="pl-1 angle d-inline-block">&gt;</span></small>
          </button>
        </div>
      </div>
    </footer>
    
    </React.Fragment>
  );
}

export default Layout;