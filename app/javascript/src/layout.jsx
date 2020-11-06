// layout.js
import React from 'react';
import './layout.scss';
// react router, routing set up in layout.js
const Layout = (props) => {
  return (
    <React.Fragment>
      
      <div>
      <nav className="navbar navbar-expand-xl py-0 position-absolute w-100" id="navbar">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous"></link>
        <div className="d-none d-xl-flex flex-grow-1" id="xlNavbar">
          <a className="navbar-brand py-0 pr-0 pl-2 text-white" href="#">Airbnb</a>
          <div className="navbar-nav ml-auto">
          <a className="nav-item nav-link py-0 px-2 text-white" href="#"><div className="px-2">Home</div></a>
            <a className="nav-item nav-link py-0 px-2 text-white" href="#"><div className="px-2">Become a host</div></a>
            <a className="nav-item nav-link py-0 px-2 text-white" href="#"><div className="px-2">Sign up</div></a>
            <a className="nav-item nav-link py-0 px-2 text-white" href="#"><div className="px-2">Log in</div></a>
          </div>
        </div>

        <a className="navbar-toggler navbar-brand py-0 pr-0 pl-2 border-0 
          position-relative collapsed" role="button" data-toggle="collapse" 
          href="#navbarMenu" id="navbarMenuToggler">Airbnb</a>
        <div className="collapse navbar-collapse px-4 pb-4 font-weight-light bg-white
         position-absolute" id="navbarMenu">
          <a className="nav-item nav-link" href="#">Home</a>
          <hr />
          <a className="nav-item nav-link" href="#">Invite friends</a>
          <a className="nav-item nav-link" href="#">Invite friends</a>
          <hr />
          <a className="nav-item nav-link" href="#">Host a home<br /><small>Earn up to <b>$12,319 HKD a month</b></small></a>
          <a className="nav-item nav-link" href="#">Sign up</a>
          <a className="nav-item nav-link" href="#">Log in</a>
          <hr />
          <a className="nav-item nav-link" href="#">Help</a>
        </div>
      </nav>
      
      <div>
    
      </div>

      </div>

      

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