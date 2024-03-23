import React from 'react'
import './About.css'

import aboutus from '../../Assets/team-business-people-stacking-hands.jpg'
import play_icon from '../../Assets/play_icon.webp'

export const About = () => {
  return (
    <div className='about'>
        <div className='about-in'>
            <div className="about-left">
                <img src={aboutus} alt="" className='about-img'/>
                <img src={play_icon} alt="" className='play_icon'/>
            </div>

            <div className="about-left">
                <h3>ABOUT CA Website</h3>   
                <h2>Trusted Platform</h2> 
                <p>Transparency in business and CA</p>
                <p>Users receive notification without the risk of interception</p>
                <p >Verified Credentials</p>
                <p>Offer prompt and responsive customer support</p>
            </div>
        </div>
    </div>
  )
}

export default About ;