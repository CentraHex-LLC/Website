import React from 'react';
import Footer from 'Footer';
import Tools from 'Tools';
import WorkRequests from 'WorkRequests';
import AboutUs from 'AboutUs';
import Services from 'Services';
import Navbar from 'Navbar';
import Header from 'Header';
import 'style/App.css';
import 'style/main.css';

function App() {
  return (
    <div className="App is-preload">
      <div id="wrapper">
        <Header/>
        <Navbar/>
        <div id="main">
          <AboutUs/>
          <Services/>
          <Tools/>
          <WorkRequests/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
