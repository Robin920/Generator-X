import React from 'react';
import './Header.css';
import LogoHeader from 'd:/React/Generator X/src/logoHeader.svg';

const Header = ({titletext,headerExpand}) => {
    return (
        <div className="head-container">
            <img src={LogoHeader} 
            alt="Headerimage" 

            className={`head-image ${
                headerExpand?'head-image-expanded':'head-image-contracted'
            }`}
            />
              <h1    className={`head-text ${
                headerExpand?'head-text-expanded':'head-text-contracted'
            }`}>{titletext}</h1>
        </div>
    );
};

export default Header;