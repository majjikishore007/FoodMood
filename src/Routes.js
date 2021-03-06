import React from 'react';
import Home from './Core/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
