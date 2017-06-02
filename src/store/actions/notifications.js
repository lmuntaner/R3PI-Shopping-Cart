import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants';

export const addNotification = (id, message) => ({
  type: ADD_NOTIFICATION,
  message,
  id,
  delay: 4000
});

export const removeNotification = (id) => ({
  type: REMOVE_NOTIFICATION,
  id,
});
