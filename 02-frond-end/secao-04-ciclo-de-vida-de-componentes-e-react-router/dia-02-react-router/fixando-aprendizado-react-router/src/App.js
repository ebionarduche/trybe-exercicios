import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/welcome' component={ Welcome } />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
