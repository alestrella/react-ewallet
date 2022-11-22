import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Currency from './Currency';

const Home = () => {
  const fetchedData = [
    { ccy: 'EUR', base_ccy: 'UAH', buy: '39.70000', sale: '40.70000' },
    { ccy: 'USD', base_ccy: 'UAH', buy: '39.50000', sale: '40.00000' },
  ];
  return (
    <>
      <Currency data={fetchedData} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
