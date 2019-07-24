import React from 'react';

const Skills = (props) => {

    const skills = ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'Postgres', 'SQLite', 'Git' ]
    return (
        <div className='skillsContainer'>
            <h2>Top Skills I've Learned</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
 
export default Skills;