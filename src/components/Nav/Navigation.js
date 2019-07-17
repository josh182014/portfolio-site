import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

const handleClick = () => {
    document.querySelector('.hamburger1').classList.toggle("change1");
    document.querySelector('.hamburger2').classList.toggle("change2");
    document.querySelector('.hamburger3').classList.toggle("change3");
    document.querySelector('.popup-nav').classList.toggle('hidden-popup-nav');

}

const Nav = () => {
    return (
        <div className="navContainer">
            <header className="header">
                <h3>joshtimmons.dev</h3>
                <div className='nav'>
                    <nav onClick={handleClick} class='hamburger-nav hidden-hamburger-nav'>
                        <div class='hamburger hamburger1'></div>
                        <div class='hamburger hamburger2'></div>
                        <div class='hamburger hamburger3'></div>
                    </nav>
                </div>
        </header>
            <div onClick={handleClick} class='popup-nav hidden-popup-nav'>
                <nav class="popup-nav-links">
                    <h2>Menu</h2>
                    <Link className='navLink' to="/">Home</Link>
                    <Link className='navLink' to="/about">About</Link>
                    <Link className='navLink' to="/contact">Contact</Link>
                </nav>
            </div>
        </div>
    );
}
 
export default Nav;