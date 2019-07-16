import React from 'react';

const Project = (props) => {
    return (
        <div className='projectContainer'>
            Name: {props.project.name}
            Link: {props.project.github}
            Main Language: {props.project.mainLanguage}
        </div>
    )
}
 
export default Project;