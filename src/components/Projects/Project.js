import React from 'react';

const Project = (props) => {
    return (
        <div key={props.project.name} className='projectContainer'>
            <div className='projectTextContainer'>
                <h3>{props.project.name}</h3>
                <div className='projectDescription'>{props.project.description}</div>
                {/* <div className='projectDiv'>Main Language: {props.project.mainLanguage}</div> */}
                <a rel="noopener noreferrer" target='_blank' href={props.project.github} className='projectDiv'><i class="fas fa-code"></i><span className='projectLink projectGitLink'>View Code</span></a>
                {props.project.viewLive ? (<a rel="noopener noreferrer" target='_blank' href={props.project.viewLive} className='projectDiv'><i class="fas fa-desktop"></i><span className='projectLink projectLiveLink'> View Live </span></a>) : (false)}
                </div>
            <div className='projectImage'><img alt='' src={props.project.img} /></div>
            {/* <div className='split' ></div> */}
        </div>
    )
}
 
export default Project;