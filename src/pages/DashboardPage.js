import Currency from 'components/Home/Currency';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Balance from 'components/Balance'
import Navigation from 'components/Navigation'

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div>
        <Navigation/>
        <Balance/>
      </div>
      <IconButton onClick={() => setIsModalOpen(true)}>
        <PlusOutlined style={{ fontSize: '20px' }} />
      </IconButton>

      {isModalOpen && (
        <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
      )}
      <Currency />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DashboardPage;
