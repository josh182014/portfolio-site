import React from 'react';
import Project from './Project';
import './Projects.scss';
import Skills from '../Skills/Skills';

const Projects = (props) => {
  if (props.projects) {
    return (
      <div className="projectsContainer">
        <Skills />
        <h2 className='featuredProjects'>Featured Projects</h2>
        {props.projects.map(project => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    );
  }

  return <h4>Loading...</h4>;
};

export default Projects;
