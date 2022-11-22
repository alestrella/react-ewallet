import { useSelector } from 'react-redux';
import { BalanceBox, BalanceTitle, BalanceContent } from './Balance.style';
import {transactionsSelectors} from '../../redux/'

const Balance = () => {
  const totalBalance = useSelector(transactionsSelectors.getBalance);

  return (
    <BalanceBox>
      <BalanceTitle>YOUR BALANCE</BalanceTitle>
          <BalanceContent>₴ {totalBalance}</BalanceContent>
    </BalanceBox>
  );
};

export default Balance;