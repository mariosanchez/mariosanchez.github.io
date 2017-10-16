import React from 'react';
import { render } from 'react-dom';
import './static/scss/main.scss';

const App = () => (
  <div className="app">
    <h1>Hello World! Ey!</h1>
  </div>
);

render(<App />, document.getElementById('app'));
