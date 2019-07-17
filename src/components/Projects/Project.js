import React from 'react';

const Project = (props) => {
    return (
        <div key={props.project.name} className='projectContainer'>
            <h3>Name: {props.project.name}</h3>
            <p>Description: {props.project.description}</p>
            <img src={props.project.img} />
            <div className='projectDiv'>Main Language: {props.project.mainLanguage}</div>
            <a className='projectDiv projectGitLink' href={props.project.github}>View Code</a>
            {props.project.viewLive ? (<a className='projectDiv projectLiveLink' rel="noopener noreferrer" target='_blank' href={props.project.viewLive}> View Live </a>) : (false)}
            <div className='split' ></div>
        </div>
    )
}
 
export default Project;