import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login } from './auth/login'
import './auth/login.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
