import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet, Navigate } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Media from 'react-media';
import {
  CurrencyWrapper,
  CurrencyBlur,
  CurrencyLaptopWrapper,
  CurrencyTabletWrapper,
  WrapperBase,
} from './CurrencyPage.style';

const CurrencyPage = () => {
  return (
    <CurrencyBlur>
      <CurrencyWrapper>
        <Helmet>
          <title>Currency</title>
        </Helmet>
        <Media
          query="(max-width: 767px)"
          render={() => (
            <CurrencyLaptopWrapper>
              <CurrencyTabletWrapper>
                <WrapperBase>
                  <Navigation />
                </WrapperBase>
                <Currency />
              </CurrencyTabletWrapper>
            </CurrencyLaptopWrapper>
          )}
        />
        <Media
          query="(min-width: 768px)"
          render={() => <Navigate to="/dashboard" />}
        />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </CurrencyWrapper>
    </CurrencyBlur>
  );
};

export default CurrencyPage;


