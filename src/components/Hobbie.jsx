// @flow

import React from 'react';

const Hobbie = (props: { icon: string, text: string }) => (
  <article>
    <span>{props.icon}</span> <span>{props.text}</span>
  </article>
);

export default Hobbie;
