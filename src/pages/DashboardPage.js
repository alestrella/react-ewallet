import Currency from 'components/Currency/Currency';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Balance from '../components/Balance'
import Navigation from '../components/Navigation'

const DashboardPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
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
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
position:relative;
width: 100%;
height: 100vh;
`