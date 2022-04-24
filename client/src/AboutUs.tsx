import React from 'react';

const AboutUs = () => {
  return (
    <section id="aboutus" className="main">
      <div className="spotlight">
        <div className="content">
          <header className="major">
            <h2>About Us</h2>
          </header>
          <p>We are a software development contractor providing automation and data visualization tools to our clients.
             Above all else, we focus on understanding your needs and communicating our insight, so we can provide you with a software solution <i><b>that increases the value of your business.</b></i>
          </p>
          {
            /*
            <ul className="actions">
              <li><a href="generic.html" className="button">Learn More</a></li>
            </ul>
            */
          }
        </div>
        <span className="image"><img src="logo.svg" alt="" /></span>
      </div>
    </section>
  );
};

export default AboutUs;