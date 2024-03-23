import React from 'react'
import './Services.css'

import accounting from '../../Assets/accounting.jpeg'
import taxation from '../../Assets/tax-management.jpeg'
import audits from '../../Assets/auditing.jpeg'
import jobsearch from '../../Assets/employee.jpeg'
import businessman from '../../Assets/businessman-working.jpeg'
import Title from '../Title/Title'

export const Services = () => {

  return (
    <div className='services-container' id='service1'>
        <div className='service-contaicer-in'>
                <Title subTitle='OUR SERVICES' title='WHAT WE OFFER'/>
                <div className='services-all'>
                    <div className='service'>
                        <img src={accounting} alt=""  className='service-img'/>
                        <div className="caption">
                            <p>ACCOUNTING</p>
                        </div>
                    </div>
                    <div className='service'>
                        <img src={taxation} alt=""  className='service-img'/>
                        <div className="caption">
                            <p>TAXATION</p>
                        </div>
                    </div>
                    <div className='service'>
                        <img src={audits} alt=""   className='service-img'/>
                        <div className="caption">
                            <p>AUDITS</p>
                        </div>
                    </div>
                    <div className='service'>
                        <img src={jobsearch} alt=""   className='service-img'/>
                        <div className="caption">
                            <p>JOB SEARCH</p>
                        </div>
                    </div>
                    <div className='service'>
                        <img src={businessman} alt=""   className='service-img'/>
                        <div className="caption">
                            <p>BUSINESSMAN</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Services ;