// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import UserPropertyWidget from './UserPropertyWidget'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <User user_id={data.user_id} />,  
    document.body.appendChild(document.createElement('div')),
  )
})