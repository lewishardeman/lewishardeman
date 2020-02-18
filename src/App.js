import React from 'react';
import './App.css'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Hire from './components/Hire/Hire';
import Contact from './components/Contact/Contact';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/hire">
            <Hire />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/workHistory">
            <WorkHistory />
          </Route>
          <Route path="/facebook" component={() => { 
              window.location.href = 'https://www.facebook.com/lewis.hardeman'; 
              return null;
          }}/>
          <Route path='/linkedIn' component={() => { 
              window.location.href = 'https://www.linkedin.com/in/lewis-hardeman-299a8631'; 
              return null;
          }}/>
          <Route path='/github' component={() => { 
              window.location.href = 'https://github.com/lewishardeman'; 
              return null;
          }}/>
          <Route path='/floorsoft' component={() => { 
              window.location.href = 'https://www.floorsoft.com'; 
              return null;
          }}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
