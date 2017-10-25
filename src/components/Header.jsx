// @flow

import React from 'react';
import NavItem from './NavItem';

const Header = () => (
  <header>
    <NavItem link="/" text="About Me" />
    <NavItem link="/experience-and-education" text="Experience & Education" />
  </header>
);

export default Header;
