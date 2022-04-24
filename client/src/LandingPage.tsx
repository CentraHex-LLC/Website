import React from 'react';
import Footer from 'Footer';
import WorkRequests from 'WorkRequests';
import AboutUs from 'AboutUs';
import Services from 'Services';
import Navbar from 'Navbar';
import Header from 'Header';

const LandingPage = () => {
  return (
    <div id="wrapper">
      <Header/>
      <Navbar/>
      <div id="main">
        <AboutUs/>
        <Services/>
        {/*<Tools/>*/}
        <WorkRequests/>
      </div>
      <Footer/>
    </div>
  );
};

export default LandingPage;