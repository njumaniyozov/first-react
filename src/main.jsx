import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './header.jsx'
import Body from './body.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Body />
  </React.StrictMode>,
)
