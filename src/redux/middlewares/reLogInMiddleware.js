import { logInUser, reLogInUser } from '../auth/authThunk';

export const reLogInMiddleware = store => next => action => {
  console.log('refreshToken right now is', store.getState().auth.refreshToken);
  if (
    (action.type === 'persist/REHYDRATE' && action.payload?.refreshToken) ||
    (action.type === logInUser.rejected.type &&
      store.getState().auth.refreshToken)
  ) {
    store.dispatch(reLogInUser(action.payload.refreshToken));
  }
  next(action);
};

export default reLogInMiddleware;
