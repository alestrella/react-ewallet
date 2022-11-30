import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Container.style';
import { Header } from '../Header/Header';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { ScrollToTop } from 'react-to-top';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Suspense fallback={null}>
        {isLoggedIn ? <Header /> : <></>}

        <Outlet />
      </Suspense>

      <ScrollToTop
        bgColor="#4A56E2"
        size={40}
        strokeWidth={3}
        strokeColor="#eead71"
        symbolSize={25}
        symbol="&#11165;"
      />
    </Container>
  );
};
