// import Media from 'react-media';

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  CurrencyDataItem,
  CurrencyData,
  CurrencyBox,
  CurrencyTitle,
  CurrencyTitleItem,
} from './Currency.styled';

const Currency = () => {
  return (
    <CurrencyBox>
      <CurrencyTitle>
        <CurrencyTitleItem>
          <p>Currency</p>
        </CurrencyTitleItem>
        <CurrencyTitleItem>
          <p>Purchase</p>
        </CurrencyTitleItem>
        <CurrencyTitleItem>
          <p>Sale</p>
        </CurrencyTitleItem>
      </CurrencyTitle>
      <CurrencyData>
        <CurrencyDataItem>
          <p>USD</p>
          <p>27,55</p>
          <p>27,65</p>
        </CurrencyDataItem>
        <CurrencyDataItem>
          <p>EUR</p>
          <p>30,00</p>
          <p>30,10</p>
        </CurrencyDataItem>
        <CurrencyDataItem>
          <p>BTC</p>
          <p>00,00</p>
          <p>00,00</p>
        </CurrencyDataItem>
      </CurrencyData>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </CurrencyBox>
  );
};

export default Currency;
