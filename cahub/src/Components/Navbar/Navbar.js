import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import logo from '../../Assets/final-logo.png'
import './Navbar.css'

const Navbar = () => {

    const [sticky,setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        })
    },[]);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} `}>

            <div className='nav-logo-name'>
                <img src={logo} alt="" className='nav-logo'></img>
                <h2 className='nav-name'>
                    TaskMasterCA-Hub
                </h2>
            </div>
            <ul className='nav-list'>
                <Link to="/">
                    <li><button className='nav-btn'>Home</button></li>
                </Link>
                <Link to="/about">
                    <li><button className='nav-btn'>About Us</button></li>
                </Link>
                <Link to="/service">
                    <li><button className='nav-btn'>Services</button></li>
                </Link>
                <Link to="/contact" >
                    <li><button className='nav-btn'>Contacts</button></li>
                </Link>
                <Link to="/signin">
                    <li><button className='nav-btn'>SignIn</button></li>
                </Link>
            </ul>
    </nav>
  )
}

export default Navbar
