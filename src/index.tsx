/**
 * This document mounts the application to the DOM.
 */
import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import './global.scss'

const container = document.getElementById('app')

if (container) {
  const root = createRoot(container)

  root.render(<App />)
} else {
  throw new Error('No node to mount to.')
}
