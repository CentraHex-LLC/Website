import React from 'react';

const Footer = () => {
  return (
    <footer id="footer">
      <section>
        <h2></h2>
        <p>Have questions? Want to follow our activity? Connect with us on one of our social platforms!</p>
        {/*<ul className="actions">
          <li><a href="generic.html" className="button">Learn More</a></li>
        </ul>*/}
        <ul className="icons">
          <li><a href="https://twitter.com/centrahexllc" className="icon brands fa-twitter alt"><span className="label">Twitter</span></a></li>
          <li><a href="https://www.facebook.com/CentraHex-LLC-114981144520407" className="icon brands fa-facebook-f alt"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/centrahexllc/" className="icon brands fa-instagram alt"><span className="label">Instagram</span></a></li>
          <li><a href="https://github.com/CentraHex-LLC" className="icon brands fa-github alt"><span className="label">GitHub</span></a></li>
        </ul>
      </section>
      <section>
        <h2>Contact Information</h2>
        <dl className="alt">
          <dt>Address</dt>
          <dd>4975 NW 5th Lane &bull; Boca Raton, FL 33431 &bull; USA</dd>
          <dt>Phone</dt>
          <dd>(561) 400-0449</dd>
          <dt>Email</dt>
          <dd><a href="#">information@centrahex.com</a></dd>
        </dl>
        <p className="copyright">Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
      </section>
    </footer>
  );
};

export default Footer;