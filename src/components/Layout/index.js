import { AppBar } from 'material-ui';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Home from 'material-ui/svg-icons/action/home';
import React from 'react';

import LinkButton from '../LinkButton';
import Notifications from '../../containers/Notifications';

export default ({ children }) =>
  <div>
    <AppBar
      title="Cool T-Shirts!"
      iconElementLeft={
        <LinkButton to="/"><Home color="white" /></LinkButton>
      }
      iconElementRight={
        <LinkButton to="/cart"><ShoppingCart color="white" /></LinkButton>
      }
    />
    { children }
    <Notifications />
  </div>;
