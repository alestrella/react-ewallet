import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Balance from 'components/Balance';
import Navigation from 'components/Navigation';
import { DashboardWrapper, DashbordBlur, DashboardLaptopWrapper, DashboardTabletWrapper, WrapperBase } from './Dashboard.styled';

const DashboardPage = () => {
  return (
    <DashbordBlur>
      <DashboardWrapper>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
<<<<<<< HEAD

        <Navigation />
        <Balance />

        <Currency />
        <TransactionsTable />
=======
        <DashboardLaptopWrapper>
          <DashboardTabletWrapper>
            <WrapperBase>
            <Navigation />
            <Balance />
            </WrapperBase>
            <Currency />
            </DashboardTabletWrapper>
        </DashboardLaptopWrapper>
        <TransactionsTable />
        <IconButton onClick={() => setIsModalOpen(true)}>
          <PlusOutlined style={{ fontSize: '20px' }} />
          </IconButton>
        {isModalOpen && (
          <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
        )}
>>>>>>> 4af06c61000ee1f8764ee489befad014249b1bdd
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </DashboardWrapper>
    </DashbordBlur>
  );
};

export default DashboardPage;
