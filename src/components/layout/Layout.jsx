import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './common/Container.style';
import { Header } from './common/Header/Header';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Suspense fallback={null}>
        {isLoggedIn ? <Header /> : <></>}

        <Outlet />
      </Suspense>

      {isLoggedIn && (
        <IconButton onClick={() => setIsModalOpen(true)}>
          <PlusOutlined style={{ fontSize: '22px' }} />
        </IconButton>
      )}

      {isModalOpen && (
        <ModalAddTransaction onClose={() => setIsModalOpen(false)} />
      )}
    </Container>
  );
};
