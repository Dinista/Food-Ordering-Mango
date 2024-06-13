import React from 'react';
import './MobileBanner.css';
import CellPhone from './assets/Cellphone.svg';
import user from './assets/ProfilePic.png';
import drink from './assets/drink.png';
import pizza from './assets/pizza.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import playstore from './assets/playstore.svg';
import appstore from './assets/AppStore.png';

const MobileBanner = () => {
  return (
    <div className="banner-section">
        <section className="banner-container">
            <div className="banner-bg">
                <img src={drink} alt="drink" className="drink-pic" />
                <img src={pizza} alt="drink" className="pizza-pic" />
                
                <div className='App-feed'>
                    <div className='PlayStore-feed'>
                        <img src={playstore} alt="Profile" className="PlayStore-pic" />
                        <div>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStarHalfAlt} className='star-app'/>
                        </div>
                        <p>4.5/5</p>
                    </div>
                    <div className='PlayStore-feed'>
                        <img src={appstore} alt="Profile" className="PlayStore-pic" />
                        <div>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                            <FontAwesomeIcon icon={faStar} className='star-app'/>
                        </div>
                        <p>5/5</p>
                    </div>
                </div>

            </div>
            <div className="banner-content">
                <img src={CellPhone} alt="Mobile App" className="cell-pic" />
                <div className="text-banner">
                    <h1 className="title-banner">Dowload our Mobile App</h1>
                    <div  className = "user-banner">
                        <img src={user} alt="Profile" className="user-pic" />
                        <img src={user} alt="Profile" className="user-pic" />
                        <img src={user} alt="Profile" className="user-pic" />
                        <a className='download'>
                           <FontAwesomeIcon icon={faArrowRight}/> 
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default MobileBanner;
