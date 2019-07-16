import React from 'react';
import Project from './Project';

const Projects = (props) => {
    if (props.projects) {
        return (
            <div className="projectsContainer">
            {props.projects.map(project => (
                <Project project={project} />
                ))}
            </div>
        );
    }
    else {
        return <h4>Loading...</h4>
    }
}
 
export default Projects;