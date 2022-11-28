import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Container.style';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Suspense fallback={null}>
        {isLoggedIn ? <Header /> : <></>}
        <Outlet />
      </Suspense>
    </Container>
  );
};
