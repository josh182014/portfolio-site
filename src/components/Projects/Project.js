import React from 'react';

const Project = (props) => {
    return (
        <div key={props.project.name} className='projectContainer'>
            <h3>Name: {props.project.name}</h3>
            <p>Description: {props.project.description}</p>
            <div>Main Language: {props.project.mainLanguage}</div>
            <div>View Code: {props.project.github}</div>
            {props.project.viewLive ? (<a rel="noopener noreferrer" target='_blank' href={props.project.viewLive}> View Live </a>) : (false)}
        </div>
    )
}
 
export default Project;