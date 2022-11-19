import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Suspense fallback={null}>
      <div> Layout </div>
      <Outlet />
    </Suspense>

  );
};

export default Layout;
