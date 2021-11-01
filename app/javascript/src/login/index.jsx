import React from 'react'
import ReactDOM from 'react-dom'
import Login from './login'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <Login user_id={data.user_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})