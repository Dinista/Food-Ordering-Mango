import React from 'react';
import './MobileBanner.css';
import CellPhone from './assets/Cellphone.svg';
import user from './assets/ProfilePic.png';

const MobileBanner = () => {
  return (
    <div className="banner-section">
        <section className="banner-container">
            <div className="banner-bg">
            </div>
            <div className="banner-content">
                <img src={CellPhone} alt="Mobile App" className="cell-pic" />
                <div className="text-banner">
                    <h1 className="title-banner">Dowload our Mobile App</h1>
                    <div  className = "user-banner">
                        <img src={user} alt="Profile" className="user-pic" />
                        <img src={user} alt="Profile" className="user-pic" />
                        <img src={user} alt="Profile" className="user-pic" />
                        <img src={user} alt="Profile" className="user-pic" />
                    </div>
                </div>
            </div>

        </section>
    </div>
  );
};

export default MobileBanner;
