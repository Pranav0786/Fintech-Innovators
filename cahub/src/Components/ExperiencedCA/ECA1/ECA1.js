import React from 'react'
import './ECA1.css'
import img from '../../../Assets/CA-img.png'
import {Link} from 'react-router-dom';

const ECA1 = () => {
  return (
    <div className='eca1-container'>
        <div className='eca1-right'>

            <h2 className='eca1-heading'>
                Experienced CA
            </h2>
            <p className='eca1-text'>
            Welcome to our website !! 
            <br/>
            Where expertise meets excellence! 
            <br/>
            As an experienced Chartered Accountant, you bring a wealth of knowledge and 
            insight that enriches our community. We are thrilled to have you join us on 
            this journey of financial innovation and strategic planning.
            </p>

            <div className='eca1-r-buttons'>
            
                    <Link to='/accounting'>
                        <button className='eca1-btn'>Accounting</button>
                    </Link>
            
                    <Link to='/taxation'>
                        <button className='eca1-btn'>Taxation</button>
                    </Link>

                    <Link to='/'>
                        <button className='eca1-btn'>Cost Accountancy</button>
                    </Link>

                    <Link to='/'>
                        <button className='eca1-btn'>Investigation of Fianace</button>
                    </Link>


            </div>


        </div>
        <div className='eca1-left'>
            <img src={img} className='eca1-img' alt=''></img>
        </div>
    </div>
  )
}

export default ECA1
