import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Services from '../Services/Services' ;
import About from '../About/About';
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Services/>
      <About />
      <Contact />
    </div>
  )
}

export default Home
