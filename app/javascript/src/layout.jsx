// layout.js
import React from 'react';
import './layout.scss';
import './image/hero.jpg'

const Layout = (props) => {
  return (
    <React.Fragment>
    <body>
    <div>
    <nav className="navbar navbar-expand-xl py-0 position-absolute">

    <div class="d-none d-xl-flex flex-grow-1" id="xlNavbar">
    <a class="navbar-brand py-0 pr-0 pl-2 text-white" href="#">Airbnb</a>
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link py-0 px-3 text-white" href="#">Become a host</a>
      <a class="nav-item nav-link py-0 px-3 text-white" href="#">Earn credit</a>
      <a class="nav-item nav-link py-0 px-3 text-white" href="#">Help</a>
      <a class="nav-item nav-link py-0 px-3 text-white" href="#">Sign up</a>
      <a class="nav-item nav-link py-0 px-3 text-white" href="#">Log in</a>
      </div>
    </div>


      <a class="navbar-toggler navbar-brand py-0 pr-0 pl-2 border-0 text-white" 
        role="button" data-toggle="collapse" href="#navbarMenu"
        id="navbarMenuToggler">Airbnb</a>


      <div class="collapse navbar-collapse pt-0 px-2 pb-4 font-weight-light bg-white" id="navbarMenu">        <a className="nav-item nav-link" href="#">Home</a>
        <hr/>
        <a className="nav-item nav-link" href="#">Invite friends</a>
        <a className="nav-item nav-link" href="#">Refer hosts</a>
        <a className="nav-item nav-link" href="#">Airbnb for work</a>
        <hr/>
        <a className="nav-item nav-link" href="#">Host a home<br/><small>Earn up to <b>$12,319 HKD a month</b></small></a>
        <a className="nav-item nav-link" href="#">Host an experience</a>
        <a className="nav-item nav-link" href="#">Sign up</a>
        <a className="nav-item nav-link" href="#">Log in</a>
        <hr/>
        <a className="nav-item nav-link" href="#">Help</a>
      </div>
    </nav>
    </div>

      <div id="hero">
        <div className="container-fluid">
          <h2 className="pb-3 pb-sm-4 text-white">Book unique homes and experiences.</h2>
        </div>
      </div>

      {props.children}
      <footer className="p-3 bg-light">
        <div>
          <p className="mr-3 mb-0 text-secondary">Airbnb Clone</p>
        </div>
      </footer>
      </body>
    </React.Fragment>
  );
}

export default Layout;