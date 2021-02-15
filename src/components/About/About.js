import React from 'react';
import './about.scss';

const About = () => (
  <div className="about-container">
    <h1>About Me</h1>
    <img alt="headshot of Josh Timmons" src="/assets/headshot.png" />
    <p className="about-paragraph">I am a Software Engineer and a music, tech, travel and coffee enthusiast. I am currently working as a Frontend Engineer at Trend Micro. Previously a Team Lead at Lambda School, where I also completed their 9 month Full Stack Web Development course, during which time I spent 8 hours a day learning React, Node.js, Python, and much more.</p>
    <span className="divider" />
    <h2>Biography</h2>
    <p className="bio">After graduating from high school, Joshua attended Montana State University Billings taking general college courses. Shortly after, Joshua transferred to Franklin, TN to attend Dark Horse Institute in pursuit of his audio engineering certification. Upon completion, he traveled throughout major cities in the west, before settling back in Montana.</p>

    <p className="bio">Having always been interested in all types of technology, Joshua learned about the opportunities available in software developing and began his dive into the programming world. Starting with online courses like Harvard’s CS50, he then applied and was accepted into Lambda School’s Full Stack Web Development course, a 9 month course with curriculum covering web technologies such as JavaScript, CSS, and React, as well as the computer science section covering OOP with technologies such as Python, Django and Flask.</p>

    <p className="bio">Joshua is and always has been proficient in the technical field, specializing in all facets of technology. He enjoys the creative aspect of developing and being able to continually learn in the field.</p>

    <p className="bio">Joshua also enjoys volunteering for the Red Lodge Area Community Foundation and spends a great deal of time with his girlfriend and their devoted German Shepherds hiking the great outdoors.</p>
  </div>
);

export default About;
