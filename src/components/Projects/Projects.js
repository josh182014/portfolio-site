import React from 'react';
import Project from './Project';
import './Projects.scss';
import Skills from '../Skills/Skills';

const Projects = (props) => {
  if (props.projects) {
    return (
      <div className="projectsContainer">
        {props.projects.map(project => (
          <Project key={project.name} project={project} />
        ))}
        <Skills />
      </div>
    );
  }

  return <h4>Loading...</h4>;
};

export default Projects;
