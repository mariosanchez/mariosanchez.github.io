// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import preload from '../data.json';
import CV from './containers/CV';
import './static/scss/main.scss';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={props => <CV skills={preload.skills} {...props} />} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
