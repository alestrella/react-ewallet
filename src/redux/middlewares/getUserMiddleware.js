import { reconnectUser, reLogInUser } from '../auth/authThunk';

export const getUserMiddleware = store => next => action => {
  if (
    action.type === reLogInUser.fulfilled.type &&
    action.payload.accessToken
  ) {
    store.dispatch(reconnectUser());
  }
  next(action);
};

export default getUserMiddleware;
