import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Commercial from './components/commercial/Commercial';
// import Header from './components/header/Header';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Residential from './components/residential/Residential';
import Service from './components/service/Service';
// import './App.css';



function App() {
  return (
  //  <Switch>
  //   <Route exact path={'/'}>
  //     <Home />
  //   </Route>
  //   <Route path={'/projects'}>
  //     <Projects />
  //   </Route>
  //  </Switch>
  <>
  <Home />
  <Service />
  <Projects />
  <Commercial />
  <Residential />
  
  </>
  );
}

export default App;
