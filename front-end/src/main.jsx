import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import HeroSection from './HeroPage.jsx'
import MobileBanner from './MobileBanner.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <HeroSection/>
    <MobileBanner/>
  </React.StrictMode>,
)
