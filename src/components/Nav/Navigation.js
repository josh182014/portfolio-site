import React, { useState } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import "./Navigation.scss";
import SearchBar from './Search';

const Nav = (props) => {

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const [menuOpen, setMenuOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        comment: '',
    })
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleForm = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...form })
        })
        .then(res => {
            setForm({
                name: '',
                email: '',
                phone: '',
                comment: '',
            })
            setFormSubmitted(true)
            console.log('success')
        })
        .catch(error => console.log(error));
        e.preventDefault();
    }

    const handleClick = () => {
        if (!menuOpen) {
            setMenuOpen(true)
            document.querySelector('.hamburger1').classList.toggle("change1");
            document.querySelector('.hamburger2').classList.toggle("change2");
            document.querySelector('.hamburger3').classList.toggle("change3");
            document.querySelector('.popup-nav').classList.toggle('hidden-popup-nav');
            document.querySelector('.popup-nav-overlay').classList.toggle('hidden-popup-nav');
            document.querySelector('.container').classList.toggle('container-blur');
        } else {
            setMenuOpen(false)
            document.querySelector('.hamburger1').classList.toggle("change1");
            document.querySelector('.hamburger2').classList.toggle("change2");
            document.querySelector('.hamburger3').classList.toggle("change3");
            document.querySelector('.popup-nav').classList.toggle('hidden-popup-nav');
            document.querySelector('.popup-nav-overlay').classList.toggle('hidden-popup-nav');
            document.querySelector('.container').classList.toggle('container-blur');
            document.querySelector(".fa-search").classList.remove('hidden')
            document.querySelector(".searchInput").classList.add('hidden')
            document.querySelector(".search-options").classList.add('hidden')
            document.querySelector('.popup-contact-nav').classList.add("hidden-popup-contact-nav")
            document.querySelector('.popup-contact-nav').classList.remove("contact-transition")
            document.querySelector(".popup-nav").classList.remove('search-transition')
            document.querySelector(".popup-contact-nav").classList.remove('search-transition')

        }
    
    }
        
    const handleContactClick = () => {
        // setContactOpen(true)
        document.querySelector('.popup-contact-nav').classList.remove("test-popup")
        document.querySelector('.popup-contact-nav').classList.remove("hidden-popup-contact-nav")
        document.querySelector('.popup-contact-nav').classList.add("contact-transition")
        document.querySelector(".popup-contact-nav").classList.remove('search-transition')
        document.querySelector(".searchInput").classList.add('hidden')
        document.querySelector(".search-options").classList.add('hidden')
        document.querySelector(".fa-search").classList.remove('hidden')
        document.querySelector(".popup-nav").classList.remove('search-transition')
        document.querySelector(".popup-contact-nav").classList.remove('search-transition')


    }
    const handleContactBackClick = () => {
        // setContactOpen(false)
        document.querySelector('.popup-contact-nav').classList.remove("contact-transition")
        // document.querySelector('.popup-contact-nav').classList.add("hidden-popup-contact-nav")
        document.querySelector('.popup-contact-nav').classList.add("test-popup")

    }

    const titleClick = () => {
        props.history.push('/')
    }

    return (
        <div className="navContainer">
            <header className="header">
                <h3 onClick={titleClick} className='title'>joshtimmons.dev</h3>
                <div className='nav'>
                    <nav onClick={handleClick} className='hamburger-nav hidden-hamburger-nav'>
                        <div className='hamburger hamburger1'></div>
                        <div className='hamburger hamburger2'></div>
                        <div className='hamburger hamburger3'></div>
                    </nav>
                </div>
            </header>
            <div onClick={handleClick} className='popup-nav-overlay nav-transition hidden-popup-nav'></div>
            <div id='popup-nav' className='popup-nav nav-transition hidden-popup-nav' >
                <nav className="popup-nav-links">
                    <h2>Menu</h2>
                    <span className='border-line'></span>
                    <Link onClick={handleClick} className='navLink' to="/">Home</Link>
                    <Link onClick={handleClick} className='navLink' to="/about">About</Link>
                    <div onClick={handleContactClick} className='navLink'>Contact</div>
                    <span className='border-line'></span>
                    <SearchBar />
                </nav>
            </div>
            <div id='test' className='popup-contact-nav hidden-popup-contact-nav contact-transition-length-open' >
                <nav className="contact-nav-form">
                    <i onClick={handleContactBackClick} className="fas fa-chevron-down fa-2x"></i>
                    <h2>Contact Me</h2>
                    {formSubmitted ?
                    <div className='success'>
                        Thanks for submitting.
                    </div> 
                    : (
                    <>
                    <p>I'm currently looking for new opportunites. <a href='/assets/resume.pdf' download='josh-timmons-resume' target='_blank'>Here</a> is a link to download a pdf version of my resume. (Clicking the link will automatically download the pdf.) Please fill out this form and I will get back to you as fast as I can!</p>
                    <form name='contact' onSubmit={handleForm}>
                        <div>Name</div>
                        <input
                            autoCapitalize="none"
                            type='text'
                            name='name'
                            placeholder='Name'
                            autoComplete='off'
                            onChange={handleChanges}
                            value={form.name}
                            required />
                        <div>Email</div>
                        <input
                            autoCapitalize="none"
                            type='text'
                            name='email'
                            placeholder='Email'
                            autoComplete='off'
                            onChange={handleChanges}
                            value={form.email}
                            required />
                        <div>Phone</div>
                        <input
                            autoCapitalize="none"
                            type='text'
                            name='phone'
                            placeholder='Phone Number'
                            autoComplete='off'
                            onChange={handleChanges}
                            value={form.phone}
                            required />
                        <div>Message</div>
                        <textarea />
                        <button type='submit'>Submit</button>
                    </form>
                    <span className='border-line'></span>
                    <span className='border-line'></span>
                    </>
                    )}
                </nav>
            </div>
        </div>
    );
}
 
export default withRouter(Nav);
