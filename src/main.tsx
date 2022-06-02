import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MobileApp from './MobileApp'
import './index.css'
import isMobileDevice from './utilities/browser-check'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isMobileDevice() ? <MobileApp /> : <App />}
  </React.StrictMode>
)
