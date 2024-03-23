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
                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem 
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam 
                eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                reprehenderit qui in ea voluptate velit esse quam nihil
            </p>

            <div className='eca1-r-buttons'>
            
                    <Link to='/accounting'>
                        <button className='eca1-btn'>Accounting</button>
                    </Link>
            
                    <Link to='/'>
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
