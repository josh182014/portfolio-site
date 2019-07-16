import React from 'react';

const Project = (props) => {
    return (
        <div key={props.project.name} className='projectContainer'>
            Name: {props.project.name}
            Link: {props.project.github}
            Main Language: {props.project.mainLanguage}
        </div>
    )
}
 
export default Project;