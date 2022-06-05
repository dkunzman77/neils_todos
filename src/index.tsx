/**
 * This document mounts the application to the DOM.
 */
import React from 'react'
import App from './App'
import * as ReactDOMClient from 'react-dom/client'

// import { createRoot } from 'react-dom/client'
import './global.scss' // --- ughy webpack hell

const container = document.getElementById('root')

if (container) {
  const root = ReactDOMClient.createRoot(container)

  root.render(<App />)
} else {
  throw new Error('No node to mount to.')
}
