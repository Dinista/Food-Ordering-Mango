import React from 'react';
import './BannerCard.css';

const BannerCard = ({ img, price, title, square }) => {
  
  const bannerStyle = {
    backgroundImage: `url(${img})`,
    width: square ? 'var(--rec-width)' : '',
    height: square ? 'var(--rec-height)' : '', 
  };

  return (
    <div className="banner-card-container" style={bannerStyle}>
      <div className='title-banner-menu'>{title}</div>
      <div className='price-banner-menu'>{price}</div>
    </div>
  );
};

export default BannerCard;
