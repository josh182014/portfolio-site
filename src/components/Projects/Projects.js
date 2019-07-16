import React from 'react';
import Project from './Project';
import './Projects.scss';

const Projects = (props) => {
    if (props.projects) {
        return (
            <div className="projectsContainer">
            {props.projects.map(project => (
                <Project key={project.name} project={project} />
                ))}
            </div>
        );
    }
    else {
        return <h4>Loading...</h4>
    }
}
 
export default Projects;