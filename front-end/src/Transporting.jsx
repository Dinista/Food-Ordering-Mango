import React from 'react';
import Card from './HeroCard.jsx';
import './Transporting.css'; 
import food1 from './assets/packaged.png';
import food2 from './assets/packaged.png';
import food3 from './assets/packaged.png';

const Transport = () => {
    return (
        <section className="trans-container">
            <div className="trans-content">
                <div className="trans-text dashed-line">
                    <h1>How we <span className="colored-text">Serve </span>you</h1>
                </div>
                <div className="card-container">
                    <Card

                        image={food1} 
                        title="Automated Packaged" 
                        description="Streamlined solutions for efficient and precise automated packaging." 
                    />
                    <Card
                        image={food2} 
                        title="Packed With Love" 
                        description="Thoughtfully designed, meticulously crafted, and packed with love." 
                    />
                    <Card
                        id = "asf"
                        image={food3} 
                        title="Serve hot Appetite" 
                        description="Savor the moment with our serve-hot delights, crafted to ignite your appetite." 
                    />
                </div>
            </div>
        </section>
    );
};

export default Transport;
