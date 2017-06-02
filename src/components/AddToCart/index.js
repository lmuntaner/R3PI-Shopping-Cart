import { IconButton } from 'material-ui';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';
import React from 'react';

export default ({ handleAddToCart }) =>
  <IconButton onClick={ handleAddToCart }>
    <AddShoppingCart color="white" />
  </IconButton>
