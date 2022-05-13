import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import isMobileDevice from './utilities/browser-check'

const isMobile = isMobileDevice()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isMobile ? (
      <App test="would redirect" />
    ) : (
      <App test="would not redirect" />
    )}
  </React.StrictMode>
)
