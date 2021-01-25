// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Charge from './booking';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Charge booking_id={data.booking_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})