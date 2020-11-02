import React from 'react';
import ReactDOM from 'react-dom';
import './image/hero.jpg'


class Hero extends React.Component {

  render() {
    return (
      <div id="hero">
        <div className="container-fluid">
          <h2 className="pb-3 pb-sm-4 text-white">Book unique homes and experiences.</h2>
        </div>
      </div>
    )
  }
}

export default Hero;
