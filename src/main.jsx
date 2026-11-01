import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// hydrateRoot preserves the prerendered SSR DOM (no blank re-mount flash,
// no double-fetching of images/critical assets). React falls back to a full
// client render automatically if it ever detects a hydration mismatch.
const container = document.getElementById('root')
ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <App initialPath={window.location.pathname} />
  </React.StrictMode>,
)
