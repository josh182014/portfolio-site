import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="intro">
      <div>
        <img className='logo' alt="" src='/favicons/android-chrome-512x512.png'></img>
        <h2>I'm Josh Timmons, a full stack software developer. Currently working as a Team Lead at Lambda School.</h2>
      </div>
    </div>
  );
}
 
export default Header;