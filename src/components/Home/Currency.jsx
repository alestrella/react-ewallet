// import Media from 'react-media';

// import { fetchCurrency } from 'services/API-PB-currency';
import {
  CurrencyDataItem,
  CurrencyData,
  CurrencyBox,
  CurrencyTitle,
  CurrencyTitleItem,
  CurrencyDataItemText,
} from './Currency.styled';

const Currency = ({ data }) => {
  return (
    <CurrencyBox>
      <CurrencyTitle>
        <CurrencyTitleItem>Currency</CurrencyTitleItem>
        <CurrencyTitleItem>Purchase</CurrencyTitleItem>
        <CurrencyTitleItem>Sale</CurrencyTitleItem>
      </CurrencyTitle>
      <CurrencyData>
        {data.map(({ ccy, buy, sale }) => {
          return (
            <CurrencyDataItem key={ccy}>
              <CurrencyDataItemText>{ccy}</CurrencyDataItemText>
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
    </CurrencyBox>
  );
};

export default Currency;
