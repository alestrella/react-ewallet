import { logInUser, reLogInUser } from '../auth/authThunk';

export const reLogInMiddleware = store => next => action => {
  if (
    (action.type === 'persist/REHYDRATE' && action.payload.refreshToken) ||
    action.type === logInUser.rejected
  ) {
    store.dispatch(reLogInUser(action.payload.refreshToken));
  }
  next(action);
};

export default reLogInMiddleware;
