import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
<<<<<<< HEAD
import { Container } from './common/Container.style';
import { Header } from './common/Header/Header';
import IconButton from 'components/IconButton';
import { PlusOutlined } from '@ant-design/icons';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
=======
import { Container } from './Container.style';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { ScrollToTop } from 'react-to-top';
>>>>>>> 4af06c61000ee1f8764ee489befad014249b1bdd

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
<<<<<<< HEAD
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
=======
    <>
      <Container>
        <Suspense fallback={null}>
          {isLoggedIn ? <Header /> : <></>}
          <Outlet />
        </Suspense>
      </Container>
      <ScrollToTop
        bgColor="#24CCA7"
        size={50}
        strokeWidth={3}
        strokeColor="#eead71"
        symbolSize={25}
        symbol="&#11165;"
      />
    </>
>>>>>>> 4af06c61000ee1f8764ee489befad014249b1bdd
  );
};
