// @flow

import React from 'react';
import glamourous from 'glamorous';

const HobbieArticle = glamourous.article({
  backgroundColor: 'red',
});

const Hobbie = (props: { icon: string, text: string }) => (
  <HobbieArticle>
    <span>{props.icon}</span> <span>{props.text}</span>
  </HobbieArticle>
);

export default Hobbie;
