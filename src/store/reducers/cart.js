import { ADD_CART } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_CART:
      let newItem;
      if (state[action.itemId]) {
        newItem = { ...state[action.itemId] }
        newItem.quantity += 1
      } else {
        newItem = {
          id: action.itemId,
          quantity: 1
        }
      }
      return {
        ...state,
        [action.itemId]: newItem
      }
    default:
      return state;
  }
}
