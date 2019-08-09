import React from 'react';

const Project = props => (
  <div key={props.project.name} className="projectContainer">
    <div className="projectTextContainer">
      <h3>{props.project.name}</h3>
      <div className="projectDescription">{props.project.description}</div>
      <a rel="noopener noreferrer" target="_blank" href={props.project.github} className="projectDiv">
        <i className="fas fa-code" />
        <span className="projectLink projectGitLink">View Code</span>
      </a>
      {props.project.viewLive ? (
        <a rel="noopener noreferrer" target="_blank" href={props.project.viewLive} className="projectDiv">
          <i className="fas fa-desktop" />
          <span className="projectLink projectLiveLink"> View Live </span>
        </a>
      ) : (null)}
    </div>
    <div className="projectImage"><img alt="" src={props.project.img} /></div>
  </div>
);

export default Project;
