import { ADD_CART, } from '../constants';
import { addNotification, removeNotification } from '../actions/notifications';

export default ({ dispatch, getState }) => next => action => {
  if (action.type === ADD_CART) {
    const item = getState().tshirts[action.itemId];
    const message = `${item.name} has been added to your cart`;
    const id = `${item.id}-${item.quantity}`;
    setTimeout(() => {
      dispatch(removeNotification(id));
    }, 4000);
    dispatch(addNotification(id, message));
  }

  return next(action);
}
