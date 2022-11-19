import { useDispatch, useSelector } from 'react-redux';
import {
  logOutUser,
  logInUser,
  getTransactions,
  transactionsSelectors,
  addTransaction,
} from '../../redux';

export const TestReduxComponent = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getTransactions);

  const theTestDispatch = () => {
    dispatch(
      addTransaction({
        income: false,
        sum: 1200,
        category: '6378dbbf7f1022fdac49bdf1',
        comment: 'spending money',
      })
    );
  };

  return (
    <div>
      <button type="button" onClick={theTestDispatch}>
        Test it
      </button>
      {transactions &&
        transactions.map(e => (
          <p
            key={e.id}
          >{`${e.id} ${e.income} ${e.category} ${e.comment} ${e.sum} ${e.balance}`}</p>
        ))}
    </div>
  );
};
