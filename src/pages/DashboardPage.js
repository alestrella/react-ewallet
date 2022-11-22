import Currency from 'components/Home/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>Dashboard Page</div>
      <Currency />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DashboardPage;
