// @flow

import React from 'react';
import glamourous from 'glamorous';

const TagArticle = glamourous.article({
  display: 'inline-flex',
  marginRight: '10px',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: 'rebeccapurple',
  fontSize: '0.85em',
});

const TagIcon = glamourous.span({
  marginRight: '10px',
  fontSize: '1em',
});

const Tag = (props: { icon: string, text: string }) => (
  <TagArticle>
    <TagIcon>{props.icon}</TagIcon> <span>{props.text}</span>
  </TagArticle>
);

export default Tag;
