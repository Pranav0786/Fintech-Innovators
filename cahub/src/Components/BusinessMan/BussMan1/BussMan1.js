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
                    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
                    eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                    reprehenderit qui in ea voluptate velit esse quam nihil
                </p>

                <Link to='/'>
                        <button className='bus-btn'>Register</button>
                    </Link>
            
            <div className='bus-r-buttons'>
            
                    <Link to='/'>
                        <button className='bus-btn'>Accounting</button>
                    </Link>
            
                    <button className='bus-btn'>Taxation</button>
      
                    <button className='bus-btn'>Cost Accountancy</button>
     
                   <button className='bus-btn'>Investigation of Fianace</button>

            </div>
            
        </div>

        <div className='bus-right'>
            <img src={img} className='bus-img' alt=''></img>
        </div>
    </div>
  )
}

export default BussMan1
