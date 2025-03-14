import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { State1 } from './components/State1/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State1 />
  </StrictMode>,
)
