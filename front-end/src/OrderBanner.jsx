import React from 'react';
import Card from './HeroCard.jsx';
import './OrderBanner.css'; 
import food1 from './assets/food2.png';
import food2 from './assets/food3.png';
import food3 from './assets/food4.png';

const OrderBanner = () => {
    return (
        <section className="order-container">
            <div className="order-content">
                <div className="order-text">
                    <h1>Our <span className="colored-text">Best Delivered </span>Categories</h1>
                    <p>It's not just about bringing you good food from restaurants, we deliver you experience.</p>
                </div>
                <div className="card-container">
                    <Card 
                        image={food1} 
                        title="Masala Chicken" 
                        description="Crispy fries with sauce and pepper"
                        order = {true}
                    />
                    <Card 
                        image={food2} 
                        title="Soft Beverages" 
                        description="Delicious drinks of fresh fuits, all very braitfull and color"
                        order = {true}
                    />
                    <Card 
                        image={food3} 
                        title="French Fries" 
                        description="Crispy fries with sauce and pepper"
                        order = {true}
                    />
                </div>
            </div>
        </section>
    );
};

export default OrderBanner;
