import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import {
  authSelectors,
  resetAuthError,
  resetTransactionsError,
  transactionsSelectors,
} from '../../redux';

export const WarningDispatcher = () => {
  const dispatch = useDispatch();
  const authError = useSelector(authSelectors.getErrorMessage);
  const transactionsError = useSelector(transactionsSelectors.getErrorMessage);

  if (authError && authError !== '') {
    toast(authError);
    dispatch(resetAuthError());
  }

  if (transactionsError && transactionsError !== '') {
    toast(transactionsError);
    dispatch(resetTransactionsError());
  }

  return <></>;
};
