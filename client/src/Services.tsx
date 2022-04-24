import React from 'react';

const Services = () => {
  return (
    <section id="services" className="main special">
      <header className="major">
        <h2>Why choose us?</h2>
      </header>
      <ul className="features">
        <li>
          <span className="icon solid major style1 fa-code"></span>
          <h3>Solid Codebase</h3>
          <p>Each of our solutions is thoroughly tested before being sent to you.</p>
        </li>
        <li>
          <span className="icon major style3 fa-copy"></span>
          <h3>Easy to Work With</h3>
          <p>We can take non technical instructions and return a fully functional solution that takes minimal training to use.</p>
        </li>
        <li>
          <span className="icon major style5 fa-gem"></span>
          <h3>Value</h3>
          <p>Our solutions valuable efficiency to your workflows without having to hire in house developers.</p>
        </li>
      </ul>
      <footer className="major">
        <ul className="actions special">
          <li><a href="generic.html" className="button">See our Portfolio</a></li>
        </ul>
      </footer>
    </section>
  );
};

export default Services;