import React from 'react';
import './AboutDelivery.css';
import mainImage from './assets/pizza-pic.png'; // Ensure you have the main image in your project
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const AboutDelivery = () => {
  return (
    <section className="delivery-section">
      <div className="delivery-content">
        <div className="delivery-text-content">
          <h1>
            <span className="delivery-bold-text">Fastest Food</span>
            <span className="colored-text"> Delivery</span>
            <span className="delivery-bold-text"> In Town</span>
          </h1>
          <div className="delivery-subtext">
            <p>When you are too lazy to cook, we are just a click away!</p>
          </div>
        </div>
        <div className="delivery-image-content">
          <img src={mainImage} alt="Main" className="delivery-main-image" />
         </div> 
          <div className="info-cards">
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

export default AboutDelivery;
