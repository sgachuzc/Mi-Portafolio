import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortafolioApp } from './PortafolioApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PortafolioApp />
    </BrowserRouter>
  </React.StrictMode>,
)
