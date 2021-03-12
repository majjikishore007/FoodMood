import React from 'react';
import Home from './Core/Home';
import Searchedrecipes from './Menu/Searchedrecipes.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Recipes from './Menu/Recipes.js';
import gettingstarted from './Menu/gettingStarted';
import About from './Core/About.js';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/home/gettingstarted" exact component={gettingstarted} />
        <Route path="/recipes" exact component={Recipes} />
        <Route
          path="/recipes/searchedrecipes"
          exact
          component={Searchedrecipes}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
