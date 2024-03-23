import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUserCircle } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import img10 from '../../Assets/login-page-removebg-preview.png';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    console.log(formData) ;
    e.preventDefault();
    try {
        const res = await fetch('http://10.40.13.53:8000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)  
        });
        const response = await res.json();
        if (response.success) {
            // Handle success, e.g., redirect to dashboard
            console.log(response.message);
        } else {
            // Handle error
            console.error(response.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup-container">
        <div className="signup-in-container">
          <div className="signup-left">
            <div className="signup-heading">
              <div className="signup-text">SignUp</div>
              <div className="signup-underline"></div>
            </div>
            
            <div className="signup-inputs">
              <div className="signup-input">
                <div className="signup-name-icon">
                  <FaUserCircle className="signup-icon" />
                  <h3 className="signup-name">Username</h3>
                </div>
                <input
                  type="text"
                  className="signup-inputfromuser"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="signup-input">
                <div className="signup-name-icon">
                  <MdEmail className="signup-icon" />
                  <h3 className="signup-name">E-mail</h3>
                </div>
                <input
                  type="text"
                  className="signup-inputfromuser"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                required/>
              </div>
              <div className="signup-input">
                <div className="signup-name-icon">
                  <RiLockPasswordFill className="signup-icon" />
                  <h3 className="signup-name">Password</h3>
                </div>
                <input
                  type="password"
                  className="signup-inputfromuser"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                required/>
              </div>
            </div>

            <div className="signup-buttons">
              <div className="signup-l-button">
                <select className="signup-loginas" name="userType" value={formData.userType} onChange={handleChange}> 
                  <option className="signup-Businessman" id='0'>Select Type</option>
                  <option className="signup-Experienced-CA" id='1'>Experienced CA</option>
                  <option className="signup-Businessman" id='2'>Businessman</option>
                  <option className="signup-New-CA" id='3'>New CA</option>
                </select>
              </div>
              <div className="signup-r-button">
                <Link to="/dashboard">
                  <button className="signup-signup" type='submit' onClick={handleSubmit}>SignUp</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="signup-right">
            <img className="signup-signup-image" src={img10} alt="p" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;