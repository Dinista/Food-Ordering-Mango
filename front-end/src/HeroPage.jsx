import React from 'react';
import './HeroPage.css';
import profilePic from './assets/ProfilePic.png'; // Ensure you have the profile picture in your project
import mainImage from './assets/Food.jpg'; // Ensure you have the main image in your project
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="text-content">
          <h1>
            <span className="bold-text">Fastest</span>
            <span className="colored-text"> Delivery</span>
            <span className="bold-text"> &</span>
            <span className="bold-text"> Easy </span>
            <span className="colored-text"> Pickup </span>
          </h1>
          <div className="hero-subtext-content">
            <div className="hero-subtext">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <p>When you are too lazy to cook, we are just a click away!</p>
            </div>
            <div className="hero-subtext">
              <button className="search-button">
                  <FontAwesomeIcon icon={faSearch} />
                  <div className='horizontal-line'></div>
                  <p>Find Restaurants</p>
              </button>
              <a href="#order" className="order-link">
                  How to order
              </a>
            </div>
          </div>
        </div>
        <div className="image-content">
          <img src={mainImage} alt="Main" className="main-image" />
         </div> 
          <div className="info-cards">
            <div className="info-card">
              <FontAwesomeIcon className= "ico-info" icon={faMotorcycle} size='lg'/>
              <div className='text-info-card'>
                <p className="info-title">Fast delivery</p>
                <p className="info-description">Promise to deliver within 30 mins</p>
              </div>
            </div>
            <div className="info-card">
              <FontAwesomeIcon className = "ico-info" icon={faShoppingBag} size='lg'/>
              <div className='text-info-card'>
                <p className="info-title">Pick up</p>
                <p className="info-description">Pickup delivery at your doorstep</p>
              </div>
            </div>
            <div className="info-card">
              <FontAwesomeIcon className="ico-info"icon={faUtensils} size= "lg"/>
              <div className='text-info-card'>
                <p className="info-title">Dine in</p>
                <p className="info-description">Enjoy your food fresh, crispy.</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default HeroSection;
