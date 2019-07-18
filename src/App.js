import React, {useState} from 'react';
import { Route, withRouter } from 'react-router-dom'
import './App.scss';
import Nav from './components/Nav/Navigation';
import Projects from './components/Projects/Projects';
import dummyProjects from './components/Projects/dummyProjects'

function App() {

  const [state, setState ] = useState({
    projects: dummyProjects
  })

  return (
    <div className='wrapper'>
    <Nav />
    <div className="container">
      <Route exact path='/'
        render={props => (
          <Projects {...props}
          projects={state.projects}
          />
        )}
      />
      <Route path='/about'
        render={props => (
          <Projects {...props}
          projects={state.projects}
          />
        )}
      />
      <Route path='/contact'
        render={props => (
          <Projects {...props}
          projects={state.projects}
          />
        )}
      />
    </div>
    </div>
  );
}

export default withRouter(App);
