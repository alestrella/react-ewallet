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
import { CurrencyLoaderBox } from './CurrencyLoader';

const Currency = () => {
  const [foundedCashlessCurrency, setFoundedCashlessCurrency] = useState([]);
  const [foundedCashCurrency, setFoundedCashCurrency] = useState([]);
  const [searchParams, setSearchParams] = useState('cashless');
  const [isLoading, setIsLoading] = useState(true);
  const [lastTimeStamp, setLastTimeStamp] = useState(0);

  const refreshTime = 600000;

  useEffect(() => {
    fetchData();
    setLastTimeStamp(Date.now());
  }, []);

  useEffect(() => {
    let timer = setInterval(async () => {
      let currentTime = Date.now();
      if (lastTimeStamp === 0) {
        setLastTimeStamp(currentTime);
        clearInterval(timer);
        return;
      }
      fetchData();
      if (lastTimeStamp + refreshTime * 0.9 < currentTime) {
        setLastTimeStamp(currentTime);
        clearInterval(timer);
      }
    }, refreshTime);
  }, [lastTimeStamp]);

  async function fetchData() {
    setIsLoading(true);
    await fetchCurrency('cashless').then(setFoundedCashlessCurrency);
    await fetchCurrency('cash').then(setFoundedCashCurrency);
    setIsLoading(false);
  }

  const changeSearchValue = value => {
    setSearchParams(value);
    if (value === 'cashless') {
      foundedCashlessCurrency.map(({ code, buy, sell }, i, prevArray) => {
        prevArray = foundedCashCurrency;
        return (
          counter(`${code}Buy`, prevArray[i].buy, buy.toFixed(2), 3),
          counter(`${code}Sell`, prevArray[i].sell, sell.toFixed(2), 3)
        );
      });
    } else {
      foundedCashCurrency.map(({ code, buy, sell }, i, prevArray) => {
        prevArray = foundedCashlessCurrency;
        return (
          counter(`${code}Buy`, prevArray[i].buy, buy.toFixed(2), 3),
          counter(`${code}Sell`, prevArray[i].sell, sell.toFixed(2), 3)
        );
      });
    }
  };

  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 0.01 : -0.01,
      step = duration / range,
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current.toFixed(2);
        if (current.toFixed(2) === end) {
          clearInterval(timer);
        }
      }, step);
  }

  return (
    <>
      <CurrencyBox>
        {isLoading ? (
          <CurrencyLoaderBox>
            <span>
              <CurrencyTitle>
                <CurrencyTitleItem>Currency</CurrencyTitleItem>
                <CurrencyTitleItem>Purchase</CurrencyTitleItem>
                <CurrencyTitleItem>Sale</CurrencyTitleItem>
              </CurrencyTitle>
              <h3>Loading...</h3>
            </span>
          </CurrencyLoaderBox>
        ) : (
          <>
            <CurrencyTitle>
              <CurrencyTitleItem>Currency</CurrencyTitleItem>
              <CurrencyTitleItem>Purchase</CurrencyTitleItem>
              <CurrencyTitleItem>Sale</CurrencyTitleItem>
            </CurrencyTitle>
            <CurrencyData>
              {searchParams === 'cashless'
                ? foundedCashlessCurrency.map(
                    ({ code = 'No Data', buy = '00.00', sell = '00.00' }) => {
                      return (
                        <CurrencyDataItem key={code}>
                          <CurrencyDataItemText>{code}</CurrencyDataItemText>
                          <CurrencyDataItemText id={`${code}Buy`}>
                            {parseFloat(buy).toFixed(2)}
                          </CurrencyDataItemText>
                          <CurrencyDataItemText id={`${code}Sell`}>
                            {parseFloat(sell).toFixed(2)}
                          </CurrencyDataItemText>
                        </CurrencyDataItem>
                      );
                    }
                  )
                : foundedCashCurrency.map(
                    ({ code = 'No Data', buy = '00.00', sell = '00.00' }) => {
                      return (
                        <CurrencyDataItem key={code}>
                          <CurrencyDataItemText>{code}</CurrencyDataItemText>
                          <CurrencyDataItemText id={`${code}Buy`}>
                            {parseFloat(buy).toFixed(2)}
                          </CurrencyDataItemText>
                          <CurrencyDataItemText id={`${code}Sell`}>
                            {parseFloat(sell).toFixed(2)}
                          </CurrencyDataItemText>
                        </CurrencyDataItem>
                      );
                    }
                  )}
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
          </>
        )}
      </CurrencyBox>
    </>
  );
};

export default Currency;
