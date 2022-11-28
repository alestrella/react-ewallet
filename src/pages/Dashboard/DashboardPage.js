import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Balance from 'components/Balance';
import Navigation from 'components/Navigation';
import { DashboardWrapper, DashbordBlur } from './Dashboard.styled';

const DashboardPage = () => {
  return (
    <DashbordBlur>
      <DashboardWrapper>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>

        <Navigation />
        <Balance />

        <Currency />
        <TransactionsTable />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </DashboardWrapper>
    </DashbordBlur>
  );
};

export default DashboardPage;
