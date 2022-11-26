import { logInUser, reconnectUser } from './auth/authThunk';
import { getCategories } from './categories/categoriesThunk';

export const getCategoriesMiddleware = store => next => action => {
  if (
    action.type === logInUser.fulfilled.type &&
    action.payload.username &&
    action.payload.email
  ) {
    setTimeout(() => store.dispatch(getCategories()), 250);
  }
  if (
    action.type === reconnectUser.fulfilled.type
  ) {
    console.log("Hello from middleware reconnectUser");
    setTimeout(() => store.dispatch(getCategories()), 250);
  }
  next(action);
};

export default getCategoriesMiddleware;
