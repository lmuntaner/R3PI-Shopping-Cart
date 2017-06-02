import { IconButton } from 'material-ui';
import React from 'react';
import { Link } from 'react-router-dom';

export default ({ children, to }) =>
  <Link to={ to }><IconButton>{ children }</IconButton></Link>;
