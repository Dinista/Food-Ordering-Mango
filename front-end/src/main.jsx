import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import HeroSection from './HeroPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <HeroSection/>
  </React.StrictMode>,
)
