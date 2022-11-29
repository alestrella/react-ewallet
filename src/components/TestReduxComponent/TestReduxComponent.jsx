import { useDispatch, useSelector } from 'react-redux';
import {
  //   logOutUser,
  //   logInUser,
  getTransactions,
  transactionsSelectors,
} from '../../redux';

import { token } from '../../redux';
// token.set(
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2EwOTFjMGZhNTQwYTJiYmM1NTQ0YyIsImlhdCI6MTY2OTA0MjYxMCwiZXhwIjoxNjY5MTI5MDEwfQ.vb402CdjrFObdAwuW22lJvsympdth3-506Q0_UuQ3ys'
// );

export const TestReduxComponent = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(transactionsSelectors.getTransactions);

  useEffect(() => {
    dispatch(getTransactions(1));
  }, [dispatch]);

  const EarnDispatch = () => {
    dispatch(
      addTransaction({
        type: 'income',
        sum: 1200 + Math.floor(Math.random() * 10) * 100,
        category: '6378dbbf7f1022fdac49bdf1',
        comment: 'got paid for my job',
      })
    );
  };

  const SpendDispatch = () => {
    dispatch(
      addTransaction({
        type: 'expense',
        sum: 800 + Math.floor(Math.random() * 10) * 10,
        category: '6378dbbf7f1022fdac49bdf1',
        comment: 'spending my money on stuff',
      })
    );
  };

  return (
    <div>
      <button type="button" onClick={() => dispatch(operations[0]())}>
        Test it
      </button>
      {transactions &&
        transactions.map(e => (
          <p
            key={e.id}
          >{`${e.id} ${e.type} ${e.category} ${e.comment} ${e.sum} ${e.balance}`}</p>
        ))}
    </div>
  );
};
