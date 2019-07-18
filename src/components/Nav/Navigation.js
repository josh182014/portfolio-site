import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";
import SearchBar from './Search';

const handleClick = () => {
    document.querySelector('.hamburger1').classList.toggle("change1");
    document.querySelector('.hamburger2').classList.toggle("change2");
    document.querySelector('.hamburger3').classList.toggle("change3");
    document.querySelector('.popup-nav').classList.toggle('hidden-popup-nav');
    document.querySelector('.popup-nav-overlay').classList.toggle('hidden-popup-nav');
    document.querySelector('.container').classList.toggle('container-blur');

}

const handleOutClick = () => {
    document.querySelector('.hamburger1').classList.toggle("change1");
    document.querySelector('.hamburger2').classList.toggle("change2");
    document.querySelector('.hamburger3').classList.toggle("change3");
    document.querySelector('.popup-nav').classList.toggle('hidden-popup-nav');
    document.querySelector('.popup-nav-overlay').classList.toggle('hidden-popup-nav');
    document.querySelector('.container').classList.toggle('container-blur');
    document.querySelector(".fa-search").classList.remove('hidden')
    document.querySelector(".searchInput").classList.add('hidden')
    document.querySelector(".search-options").classList.add('hidden')
}


const Nav = () => {
    return (
        <div className="navContainer">
            <header className="header">
                <h3>joshtimmons.dev</h3>
                <div className='nav'>
                    <nav onClick={handleClick} className='hamburger-nav hidden-hamburger-nav'>
                        <div className='hamburger hamburger1'></div>
                        <div className='hamburger hamburger2'></div>
                        <div className='hamburger hamburger3'></div>
                    </nav>
                </div>
            </header>
            <div onClick={handleOutClick} className='popup-nav-overlay hidden-popup-nav'></div>
            <div className='popup-nav hidden-popup-nav' >
                <nav className="popup-nav-links">
                    <h2>Menu</h2>
                    <Link onClick={handleOutClick} className='navLink' to="/">Home</Link>
                    <Link onClick={handleOutClick} className='navLink' to="/about">About</Link>
                    <Link onClick={handleOutClick} className='navLink' to="/contact">Contact</Link>
                    <SearchBar />
                </nav>
            </div>
        </div>
    );
}
 
export default Nav;