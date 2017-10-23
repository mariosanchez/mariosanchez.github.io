// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import preload from '../data.json';
import AboutMe from './containers/AboutMe';
import './static/scss/main.scss';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props => <AboutMe technologies={preload.technologies} hobbies={preload.hobbies} {...props} />}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
