import React from 'react';
import './Header.css';
import profile from './assets/ProfilePic.png';
import iconLogo from './assets/logo.png';


const Header = () => {
  return (
    <div className="header-align">
        <header className="header-container">
            <div className="logo">
                <img src={iconLogo} alt="Mango" className="logo-pic" />
            </div>
            <nav className="nav">
                <a href="#menu" className="nav-link">Menu</a>
                <a href="#offers" className="nav-link">Offers</a>
                <a href="#food" className="nav-link">Food</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#restaurant" className="nav-link">Restaurant</a>
            </nav>
            <div href="#profileContainer" className="profile-container">
                <a href="#profile" className="profile-link">
                    <img id="pic-header" src={profile} alt="Profile" className="profile-pic" />
                </a>
                <h1>Zezinho</h1>
            </div>
            </header>
        </div>
  );
}

export default Header;
