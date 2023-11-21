import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  ColorModeScript } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ColorModeScript initialColorMode="light" />
    <App />
  </React.StrictMode>,
)
