import { useSelector } from 'react-redux';
import { BalanceBox, BalanceTitle, BalanceContent } from './Balance.style';
import { transactionsSelectors } from '../../redux/'
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

const Balance = () => {
  const { t} = useTranslation();
  const totalBalance = useSelector(transactionsSelectors.getBalance);

  return (
    <BalanceBox>
      <BalanceTitle>{t('balance.BalanceTitle')}</BalanceTitle>
      <BalanceContent>₴{totalBalance.toFixed(2)}</BalanceContent>
    </BalanceBox>
  );
};

export default Balance;
