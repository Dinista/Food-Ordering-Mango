import React from 'react';
import './BannerMenu.css'; 
import BannerCard from './BannerCard.jsx';
import banner1 from './assets/banner1.jpg';
import banner2 from './assets/banner2.jpg';
import banner3 from './assets/banner3.jpg';

const BannerMenu = () => {
  return (
    <div className="banner-menu">
        <BannerCard
            img={banner1}
            price={'$32,00'}
            title={'Delicious hamburguer with fries '}
            square={false}
        />
        <div className='right-banners'>
            <BannerCard
                img={banner2}
                price={'$32,00'}
                title={'Delicious hamburguer with fries '}
                square={true}
            />
            <BannerCard
                img={banner3}
                price={'$32,00'}
                title={'Delicious hamburguer with fries '}
                square={true}
            />
        </div>
    </div>
  );
};

export default BannerMenu;