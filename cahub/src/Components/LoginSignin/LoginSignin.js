import React, { useState } from 'react';
import { FaUserCircle  } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import img10 from '../../Assets/login-page-removebg-preview.png'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';


const LoginSignin = () => {

    const navigate = useNavigate() ;

    const [formData, setFormData] = useState({ username: '', password: '' ,userType:''});
    const [error, setError] = useState('');
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(formData) ;
        const res = await fetch('http://10.40.13.53:8000/api/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        const response = await res.json()
        if (response.success ) {
          if( response.usertype === "Experienced CA")
            navigate('/experiencedCA');
          else if(response.usertype === "Businessman")
            navigate('/businessmanreg');
          else if(response.usertype === "New CA")
            navigate('/busheader');

        } else {
          console.log(response.message);
        }
      } catch (error) {
        setError('Sign-in failed. Please try again.');
        console.error('Error signing in:', error);
      }
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  return (
    <div className="signup-container">
      <div className="signup-in-container">
        <div className="signup-left">
          <div className="signup-heading">
            <div className="signup-text">SignIn</div>
            <div className="signup-underline"></div>
          </div>

          <div className="signup-inputs">
            <div className="signup-input">
              <div className="signup-name-icon">
                <FaUserCircle className="signup-icon" />
                <h3 className="signup-name">Username</h3>
              </div>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required className="signup-inputfromuser" />
            </div>
            <div className="signup-input">
              <div className="signup-name-icon">
                <RiLockPasswordFill className="signup-icon" />
                <h3 className="signup-name">Password</h3>
              </div>
              <input type="password" className="signup-inputfromuser" name="password" value={formData.password} onChange={handleChange} required />
            </div>
          </div>

          <div className="signup-buttons">
            <div className="signup-l-button">
              <select className="signup-loginas" name="userType" value={formData.userType} onChange={handleChange} >
              <option className="signup-Experienced-CA">Select Option</option>
                <option className="signup-Experienced-CA">Experienced CA</option>
                <option className="signup-Businessman">Businessman</option>
                <option className="signup-New-CA">New CA</option>
              </select>
            </div>
            <div className="signup-r-button">
              <Link to="/dashboard">
                <button className="signup-signup" onClick={handleSubmit}>SignIn</button>
              </Link>
            </div>
          </div>

          <div className='in-not-register'>
            <h3>Not Register yet</h3>
            <Link to="/signup">
              <button className="signup-signup" >SignUp</button>
            </Link>

          </div>

        </div>

        <div className="signup-right">
          <img className="signup-signup-image" src={img10} alt="p" />
        </div>
      </div>
    </div>
  );
};

export default LoginSignin;


