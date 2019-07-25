import React from 'react';
import './about.scss'
const About = () => {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <img alt='headshot of Josh Timmons' src='/assets/headshot.jpg'></img>
            <p className='about-paragraph'>I am an extremely motivated Full Stack Software Developer seeking a career near Austin, TX. I am currently attending Lambda School's Full Stack Web Development course.  </p>
            <span className='divider'></span>
            <h2>Biography</h2>
            <p className='bio'>
            After graduating from high school, Joshua attended MSU-B, and then Dark Horse Institute in Franklin, TN in pursuit of his audio engineering certification. Upon completion, he traveled throughout major cities in the west, settling back in Montana to pursue his passions for music recording.</p>

            <p className='bio'>After deciding he needed to be able to create more, Joshua began his dive into the programming world. Starting with online courses like Harvard’s CS50, he then applied and was accepted into Lambda School’s Full Stack Web Development course, a 9 month course with curriculum covering web technologies such as JavaScript, CSS, and React, to the computer science section cover OOP with technologies such as Python, Django and Flask.</p>

            <p className='bio'>Joshua is and always has been a techy, specializing in all facets of technology. Joshua won several blue ribbons in 4H photography, volunteers for the Red Lodge Area Community Foundation, and spends a great deal of time with his girlfriend and their devoted German Shepherds, Allie and Luna, hiking the great outdoors.</p>
        </div>
    );
}
 
export default About;