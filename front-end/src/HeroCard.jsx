import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './HeroCard.css'; // Create a CSS file for styling

const Card = ({ image, title, description }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={title} />
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button className="card-button">
                Order Now <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Card;
