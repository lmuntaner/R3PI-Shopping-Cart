import { ADD_CART } from '../constants';

export const addToCart = (itemId) => ({
  type: ADD_CART,
  itemId,
});
