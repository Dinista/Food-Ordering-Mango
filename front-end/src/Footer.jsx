import React from 'react';
import './Footer.css'
import logo1 from './assets/unnamed(1).png'
import logo2 from './assets/unnamed(2).png'
import logo3 from './assets/unnamed(3).png'
import logo4 from './assets/unnamed(4).png'
import logo5 from './assets/unnamed(5).png'
import logo6 from './assets/unnamed(6).png'
import logoMango from './assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <section className="footer-container">
            <div>
                <img src={logo1} className='logos-footer'></img>
                <img src={logo2} className='logos-footer1'></img>
                <img src={logo3} className='logos-footer2'></img>
            </div>
            <div>
                <img src={logo4} className='logos-footer4'></img>
                <img src={logo5} className='logos-footer5'></img>
                <img src={logo6} className='logos-footer6'></img>
            </div>
            <div className='footer-content'>
                <div className='footer-content-container'>
                    <img src={logoMango} className='footer-logo' ></img>
                    <h1><p>Enjoy <span className='black-text'> 1000 + </span> foods from</p>
                        <p><span className='yellow-text'>500</span> restaurants </p></h1>
                    <button className='footer-button'>Order Now</button>
                </div>
            </div>
            <footer className='rodape'>
                <section className='rodape-content'>
                    <div>
                        <img src={logoMango}></img>
                    </div>
                    <div>
                        <p className='footer-text'>2024 | Project for <span style={ {color: 'tomato'}}>Study</span> Only</p>
                    </div>
                    <div className='footer-social'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="lg" />
                        </a>
                    </div>
                </section>
            </footer>
        </section>
    );
};

export default Footer;
