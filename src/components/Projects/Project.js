import React from 'react';

const Project = (props) => {
    return (
        <div key={props.project.name} className='projectContainer'>
            <div className='projectTextContainer'>
                <h3>Name: {props.project.name}</h3>
                <div className='projectDescription'>Description: {props.project.description}</div>
                <div className='projectDiv'>Main Language: {props.project.mainLanguage}</div>
                <a className='projectDiv projectGitLink' href={props.project.github}>View Code</a>
                {props.project.viewLive ? (<a className='projectDiv projectLiveLink' rel="noopener noreferrer" target='_blank' href={props.project.viewLive}> View Live </a>) : (false)}
                </div>
            <img src={props.project.img} />
            <div className='split' ></div>
        </div>
    )
}
 
export default Project;