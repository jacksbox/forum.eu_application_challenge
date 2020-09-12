import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const element = document.getElementById('App')

if (element) {
  ReactDOM.render(<App />, document.getElementById('App'))
}
