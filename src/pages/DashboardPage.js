
import Currency from 'components/Currency/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import TransactionsTable from 'components/TransactionsTable/TransactionsTable';
import Balance from 'components/Balance'
import Navigation from 'components/Navigation'
import { DashboardWrapper }from 'components/DashboardStyled'

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardWrapper>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
        <Navigation/>
        <Balance/>
      <IconButton onClick={() => setIsModalOpen(true)}>
        <PlusOutlined style={{ fontSize: '20px' }} />
      </IconButton>

      {isModalOpen && (
        <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
      )}
      <Currency />
      <TransactionsTable />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </DashboardWrapper>
  );
};

export default DashboardPage;

