import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div className="app">
    <h1>Hello World!</h1>
  </div>
);

render(<App />, document.getElementById('app'));
