import React from 'react';

const Header = () => {
  return (
    <div className="header-custom">
      <img src='splash-min.jpg' className='custom-image'></img>
      <header id="header" className="alt">
        <span className="logo logo-custom"><img src="banner.svg" alt=""  /></span>
      </header>
    </div>
  );
};

export default Header;