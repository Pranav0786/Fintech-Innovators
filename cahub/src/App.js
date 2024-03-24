import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/MyHome/Home.jsx'
import LoginSignin from './Components/LoginSignin/LoginSignin.js';
import LoginSignup from './Components/LoginSignup/LoginSignup.js' ;
import Contact from './Components/Contact/Contact.js';
import Services from './Components/Services/Services.js';
import About from './Components/About/About.js';
import ExperiencedCA from './Components/ExperiencedCA/ExperiencedCA.js'
import Accounting from './Components/Accounting/Accounting.js'
import Taxation from './Components/Taxation/Taxation.js';
import BusinessmanReg from './Components/BusinessmanReg/BusinessmanReg.js'
import Joblisting from './Components/JobListing/JobListing.jsx'
import BusinessmanHeader from './Components/Businessman_Header/index.jsx';
import Business from './Components/BusinessMan/BusinessMan.js' ;


function App() {
  return (
    <Router>
      {/* <Header /> */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<LoginSignup/>} />
        <Route path='/signin' element={<LoginSignin/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/service' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/experiencedCA' element={<ExperiencedCA/>} />
        <Route path='/accounting' element= {<Accounting/>} /> 
        <Route path= '/taxation' element= {<Taxation/>} />
        <Route path='/businessmanreg' element = { <BusinessmanReg/>} />
        <Route path='/joblisting' element= {<Joblisting/> }/>
        <Route path= '/busheader' element = {<BusinessmanHeader/>} /> 
        <Route path='/businessman' element = {<Business/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
