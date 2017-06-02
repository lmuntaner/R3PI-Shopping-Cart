import { applyMiddleware, createStore } from 'redux';

import notificationsMiddleware from './middleware/notifications';
import reducer from './reducers';

export default createStore(
  reducer,
  applyMiddleware(notificationsMiddleware)
);
