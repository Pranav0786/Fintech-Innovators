import React from 'react'
import {Link} from 'react-router-dom';
import './BussMan1.css'
import img from '../../../Assets/businessman-img.png'

const BussMan1 = () => {
  return (
    <div className='bus-container'>
        <div className='bus-left'>
            <h2 className='bus-heading'>
                BusinessMan
            </h2>
                <p className='bus-text'>
                Welcome to Business portal Where Vision Meets Reality!
                we understand the challenges and aspirations of modern businessmen like you. 
                Whether you're a seasoned entrepreneur or just starting your journey, 
                we're here to propel your vision forward and turn your dreams into tangible achievements.
                </p>

                <Link to='/busheader'>
                        <button className='bus-btn'>Add Job</button>
                </Link>
            
          
            
        </div>

        <div className='bus-right'>
            <img src={img} className='bus-img' alt=''></img>
        </div>
    </div>
  )
}

export default BussMan1
