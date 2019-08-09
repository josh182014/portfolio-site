import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Navigation';
import Projects from './components/Projects/Projects';
import dummyProjects from './components/Projects/dummyProjects';
import SearchPage from './components/Search/SearchPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [state] = useState({
    projects: dummyProjects,
  });

  useEffect(() => {
    console.log("Hiring? I'm currently looking for new opportunites. Download my resume here https://joshtimmons.dev/assets/resume.pdf :)");
  }, []);

  return (
    <div className="wrapper">
      <Nav />
      <div className="container">
        <Route
          exact
          path="/"
          render={props => (
            <Projects
              {...props}
              projects={state.projects}
            />
          )}
        />
        <Route
          path="/about"
          render={props => (
            <About
              {...props}
              projects={state.projects}
            />
          )}
        />
        <Route
          path="/contact"
          render={props => (
            <Contact
              {...props}
              projects={state.projects}
            />
          )}
        />
        <Route
          path="/search"
          render={props => (
            <SearchPage
              {...props}
              projects={state.projects}
            />
          )}
        />
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
