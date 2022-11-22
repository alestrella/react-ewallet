import { useEffect, useState } from 'react';
import { fetchCurrency } from 'services/API-PB-currency';
import {
  CurrencyDataItem,
  CurrencyData,
  CurrencyBox,
  CurrencyTitle,
  CurrencyTitleItem,
  CurrencyDataItemText,
  ButtonBox,
  ButtonCurrency,
} from './Currency.styled';

const Currency = () => {
  const [foundedCurrency, setFoundedCurrency] = useState([]);
  const [searchParams, setSearchParams] = useState('cashless');

  const changeSearchValue = value => {
    setSearchParams(value);
  };
  useEffect(() => {
    fetchCurrency(searchParams).then(setFoundedCurrency);
  }, [searchParams]);

  return (
    <CurrencyBox>
      <CurrencyTitle>
        <CurrencyTitleItem>Currency</CurrencyTitleItem>
        <CurrencyTitleItem>Purchase</CurrencyTitleItem>
        <CurrencyTitleItem>Sale</CurrencyTitleItem>
      </CurrencyTitle>
      <CurrencyData>
        {foundedCurrency.map(({ code, buy = '00.00', sale = '00.00' }) => {
          return (
            <CurrencyDataItem key={code}>
              <CurrencyDataItemText>{code}</CurrencyDataItemText>
              <CurrencyDataItemText>
                {parseFloat(buy).toFixed(2)}
              </CurrencyDataItemText>
              <CurrencyDataItemText>
                {parseFloat(sale).toFixed(2)}
              </CurrencyDataItemText>
            </CurrencyDataItem>
          );
        })}
      </CurrencyData>
      <ButtonBox>
        <ButtonCurrency
          disabled={searchParams === 'cash' ? true : false}
          onClick={() => {
            changeSearchValue('cash');
          }}
        >
          Cash
        </ButtonCurrency>
        <ButtonCurrency
          disabled={searchParams === 'cashless' ? true : false}
          onClick={() => {
            changeSearchValue('cashless');
          }}
        >
          Cashless
        </ButtonCurrency>
      </ButtonBox>
    </CurrencyBox>
  );
};

export default Currency;
