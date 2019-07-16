import React from 'react';

const Skills = (props) => {

    const skills = ['JavaScript', 'React.js', 'Postgres', 'SQLite', 'Git' ]
    return (
        <div className='skillsContainer'>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
 
export default Skills;