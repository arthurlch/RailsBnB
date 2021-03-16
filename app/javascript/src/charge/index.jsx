// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Charge from './charge';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));
  
  ReactDOM.render(
    <Charge charge_id={data.charge_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})