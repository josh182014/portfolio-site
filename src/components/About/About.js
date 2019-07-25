import React from 'react';
import './about.scss'
const About = () => {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <img alt='headshot of Josh Timmons' src='/assets/headshot.jpg'></img>
            <p className='about-paragraph'>I am an extremely motivated Full Stack Software Developer seeking a career near Austin, TX. I am currently attending Lambda School's Full Stack Web Development course.</p>
        </div>
    );
}
 
export default About;