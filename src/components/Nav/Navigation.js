import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

const Nav = () => {
    return (
        <div className="navContainer">
            <header className="header">
                <h3>joshtimmons.dev</h3>
                <div className='nav'>
                    <Link className='navLink' to="/">Home</Link>
                    <Link className='navLink' to="/about">About</Link>
                    <Link className='navLink' to="/contact">Contact</Link>
                </div>
        </header>
        </div>
    );
}
 
export default Nav;