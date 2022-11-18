import { useDispatch, useSelector } from 'react-redux';
import {
  logOutUser,
  logInUser,
  getTransactions,
  transactionsSelectors,
} from '../../redux';

export const TestReduxComponent = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getTransactions);

  const operations = [getTransactions, logInUser, logOutUser];

  return (
    <div>
      <button type="button" onClick={() => dispatch(operations[0]())}>
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
