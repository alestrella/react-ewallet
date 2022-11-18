import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Currency from './Currency';

const Home = () => {
  return (
    <>
      <div> Home </div>
      <Currency />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Home;
