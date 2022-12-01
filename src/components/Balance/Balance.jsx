import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { BalanceBox, BalanceTitle, BalanceContent } from './Balance.style';
import { transactionsSelectors, getBalance } from '../../redux/';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

const Balance = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const totalBalance = useSelector(transactionsSelectors.getBalance);

  useEffect(() => {
    dispatch(getBalance());
  }, [dispatch]);

  return (
    <BalanceBox>
      <BalanceTitle>{t('balance.BalanceTitle')}</BalanceTitle>
      <BalanceContent>₴{totalBalance.toFixed(2)}</BalanceContent>
    </BalanceBox>
  );
};

export default Balance;
