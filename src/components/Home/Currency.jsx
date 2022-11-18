// import Media from 'react-media';

import {
  CurrencyDataItem,
  CurrencyData,
  CurrencyBox,
  CurrencyTitle,
  CurrencyTitleItem,
  CurrencyDataItemText,
} from './Currency.styled';

const Currency = () => {
  return (
    <CurrencyBox>
      <CurrencyTitle>
        <CurrencyTitleItem>Currency</CurrencyTitleItem>
        <CurrencyTitleItem>Purchase</CurrencyTitleItem>
        <CurrencyTitleItem>Sale</CurrencyTitleItem>
      </CurrencyTitle>
      <CurrencyData>
        <CurrencyDataItem>
          <CurrencyDataItemText>USD</CurrencyDataItemText>
          <CurrencyDataItemText>27,55</CurrencyDataItemText>
          <CurrencyDataItemText>27,65</CurrencyDataItemText>
        </CurrencyDataItem>
        <CurrencyDataItem>
          <CurrencyDataItemText>EUR</CurrencyDataItemText>
          <CurrencyDataItemText>30,00</CurrencyDataItemText>
          <CurrencyDataItemText>30,10</CurrencyDataItemText>
        </CurrencyDataItem>
        <CurrencyDataItem>
          <CurrencyDataItemText>BTC</CurrencyDataItemText>
          <CurrencyDataItemText>00,00</CurrencyDataItemText>
          <CurrencyDataItemText>00,00</CurrencyDataItemText>
        </CurrencyDataItem>
      </CurrencyData>
    </CurrencyBox>
  );
};

export default Currency;
