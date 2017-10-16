// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props: { link: string, text: string }) => (
  <div className="nav-item">
    <Link to={props.link}>{props.text}</Link>
  </div>
);

export default NavItem;
