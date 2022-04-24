import React from 'react';

const AboutUs = () => {
  return (
    <section id="aboutus" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>About Us</h2>
          </header>
          <p>We are a small development team based on Florida. We create data processing and visualization tools tailored to your companies needs. </p>
          <ul className="actions">
            <li><a href="generic.html" className="button">Learn More</a></li>
          </ul>
        </div>
        <span className="image"><img src="pic01.jpg" alt="" /></span>
      </div>
    </section>
  );
};

export default AboutUs;