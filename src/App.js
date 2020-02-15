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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
