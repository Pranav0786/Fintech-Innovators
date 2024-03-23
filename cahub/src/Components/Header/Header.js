import React from 'react';
import './Header.css'; 
// import dark_arrow from '../../Assets/arrow_btn.png';
//import { defer } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='header container'>
        <div className='header-text'>
            <h1 className='header-heading'>WELCOME TO CA WORLD</h1>
            <p>Explore the charm of our virtual realm where creativity meets innovation!
               Dive into the wonders of CA World with these captivating highlights</p>
            {/* <button className='header-arrow-btn'>NEXT <img src={dark_arrow} alt="" width='30%' height='30vh' /></button> */}
        </div>
    </div>
  );
};

export default Header ;