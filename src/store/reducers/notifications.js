import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      const newNotification = {
        delay: action.delay,
        id: action.id,
        message: action.message,
      };
      return {
        ...state,
        [newNotification.id]: newNotification
      };
    case REMOVE_NOTIFICATION:
      const newState = { ...state };
      delete newState[action.id]
      return newState;
    default:
      return state;
  }
}
