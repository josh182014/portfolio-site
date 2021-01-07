import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="intro">
      <div>
        <img className='logo' alt="" src='/favicons/android-chrome-512x512.png'></img>
        <div className='introText'>
          <h2>I'm Josh Timmons, a software engineer. Previously a Team Lead at Lambda School.</h2>
          <div className='socialIcons'>
            <a target = '_blank' rel='noopener noreferrer' href='https://github.com/josh182014'><i class="fab fa-2x fa-github"></i></a>
            <a target= '_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/josh-timmons-851216132/'><i class="fab fa-2x fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Header;