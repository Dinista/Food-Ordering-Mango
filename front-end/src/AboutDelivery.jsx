import React from 'react';
import './AboutDelivery.css';
import mainImage from './assets/logo(orange).svg';
import foodImage from './assets/pizza-pic.png';
import mongoImage from './assets/mango-pic.png';
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
          <div className="info-cards-delivery">
            <div className="info-card-delivery">
              <FontAwesomeIcon className = "ico-info-delivery" icon={faShoppingBag} size='lg'/>
              <div className='text-info-card-delivery'>
                <p className="info-title-delivery">Pick up</p>
                <p className="info-description-delivery">Pickup delivery at your doorstep</p>
              </div>
            </div>
            <div className="info-card-delivery">
              <FontAwesomeIcon className="ico-info-delivery"icon={faUtensils} size= "lg"/>
              <div className='text-info-card-delivery'>
                <p className="info-title-delivery">Dine in</p>
                <p className="info-description-delivery">Enjoy your food fresh, crispy.</p>
              </div>
            </div>
          </div>
      </div>
      <div className="delivery-image-content">
          <img src={mainImage} alt="Logo" className="delivery-logo-image" />
          <img src={foodImage} alt="Food" className="delivery-main-image" />
      </div>
      <img src={mongoImage} alt="Mongo" className="delivery-mongo-image" />
    </section>
  );
}

export default AboutDelivery;
