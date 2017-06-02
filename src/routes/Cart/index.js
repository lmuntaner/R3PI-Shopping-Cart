import React from 'react';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import ShoppingCart from '../../components/ShoppingCart';

const Cart = ({ items }) =>
  <Container>
    {
      items.length
      ? <ShoppingCart items={ items } />
      : <h5>No Items yet!</h5>
    }
  </Container>

const mapStateToProps = (state) => {
  const cartItems = Object.values(state.cart).map(cartItem => {
    const item = state.tshirts[cartItem.id];
    return {
      ...item,
      ...cartItem
    };
  });

  return {
    items: cartItems,
  };
}

export default connect(mapStateToProps)(Cart)
