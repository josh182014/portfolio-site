import React, {useState} from 'react';
import './App.scss';
import Nav from './components/Nav/Navigation';
import Projects from './components/Projects/Projects';
import dummyProjects from './components/Projects/dummyProjects'

function App() {

  const [state, setState ] = useState({
    projects: dummyProjects
  })

  return (
    <div className="container">
      <Nav />
      <Projects projects={state.projects} />
    </div>
  );
}

export default App;
