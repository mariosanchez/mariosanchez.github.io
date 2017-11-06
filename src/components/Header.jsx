// @flow

import React from 'react';
import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';

const Nav = glamorous(NavLink)({
  display: 'inline-block',
  color: 'red',
  padding: '15px 10px 20px 10px',
  '.active:hoover': {
    color: 'green',
    backgroundColor: 'indigo',
  },
  ':hover': {},
});

const Header = () => (
  <header className="container-fluid">
    <nav className="container">
      <Nav exact to="/">
        About Me
      </Nav>
      <Nav to="/experience-and-education">Experience & Education</Nav>
      <Nav to="/codesandbox">CodeSandbox</Nav>
    </nav>
  </header>
);

export default Header;
