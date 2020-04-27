import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/Login" component = {Login}/>
          <Route exact path = "/Signup" component = {Signup}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
