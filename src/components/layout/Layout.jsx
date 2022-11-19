import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './common/Container.style';
import { Header } from './common/Header/Header';

export const Layout = () => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Header />
        <Outlet />
      </Suspense>
    </Container>
  );
};
