import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import HeroSection from './HeroPage.jsx'
import MobileBanner from './MobileBanner.jsx'
import OrderBanner from './OrderBanner.jsx';
import AboutDelivery from './AboutDelivery.jsx';
import Transport from './Transporting.jsx';
import BannerMenu from './BannerMenu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <HeroSection/>
    <MobileBanner/>
    <OrderBanner/> 
    <AboutDelivery/>
    <Transport />
    <BannerMenu />
  
  </React.StrictMode>,
)
