import React from 'react';

const Skills = (props) => {
  const skills = ['JavaScript', 'React.js w/ Hooks', 'Data Visualization', 'TypeScript', 'Node.js', 'Redux', 'Postgress', 'CSS & Preprocessors', 'Git'];
  return (
    <div className="skillsContainer">
      <h2>Top Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
