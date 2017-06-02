import { combineReducers } from 'redux';

import cart from './cart';
import notifications from './notifications';
import tshirts from './tshirts';

export default combineReducers({
  cart,
  notifications,
  tshirts,
});
