import React from 'react';

const Navbar = () => {
  return (
    <nav id="nav">
      <ul>
        <li><a href="#aboutus" className="active">About Us</a></li>
        <li><a href="#services">Services</a></li>
        {/*<li><a href="#tools">Tools</a></li>*/}
        <li><a href="#requests">Requests</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;