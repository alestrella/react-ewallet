import { logInUser, reconnectUser } from './auth/authThunk';
import { getCategories } from './categories/categoriesThunk';

export const getCategoriesMiddleware = store => next => action => {
  if (
    action.type === logInUser.fulfilled.type &&
    action.payload.username &&
    action.payload.email
  ) {
    store.dispatch(getCategories());
  }
  if (action.type === reconnectUser.fulfilled.type) {
    store.dispatch(getCategories());
  }
  next(action);
};

export default getCategoriesMiddleware;
