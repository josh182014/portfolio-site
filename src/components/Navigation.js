import React from 'react';
import "./Navigation.scss";

const Nav = () => {
    return (
        <div className="navContainer">
            <header className="header">
                <h3>joshtimmons.dev</h3>
                <div className='nav'>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>
        </header>
        </div>
    );
}
 
export default Nav;