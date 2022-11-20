import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import TransactionsTable from './TransactionsTable/TransactionsTable';

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <div> Layout </div>
      <TransactionsTable />
      <Outlet />
    </Suspense>
  );
};

export default Layout;
