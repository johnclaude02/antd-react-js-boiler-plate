import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainContent from './components/layout/MainContent';
import Login from './components/auth/Login';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
        <MainContent />
      </Switch>
    </Router>
  );
}

export default App;
