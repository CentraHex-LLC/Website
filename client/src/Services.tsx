import React from 'react';

const Services = () => {
  return (
    <section id="services" className="main special">
      <header className="major">
        <h2>Services</h2>
      </header>
      <ul className="features">
        <li>
          <span className="icon major style5 fa-gem"></span>
          <h3>Data Visualization</h3>
          <p>We can help you <b>take control of your business data</b> by giving you the tools and guidance you need to simply make data-driven decisions.</p>
        </li>
        <li>
          <span className="icon major style3 fa-copy"></span>
          <h3>Automation Tools</h3>
          <p>Let us <b>automate repetitious tasks</b>, so you can focus on the work that actually grows your business.</p>
        </li>
        <li>
          <span className="icon solid major style1 fa-code"></span>
          <h3>Custom Solutions</h3>
          <p>Need something specific? One of our <b>developers will personally work with you</b> to build the solution you need</p>
        </li>
      </ul>
      {/*<footer className="major">
        <ul className="actions special">
          <li><a href="generic.html" className="button">See our Portfolio</a></li>
        </ul>
      </footer>*/}
    </section>
  );
};

export default Services;