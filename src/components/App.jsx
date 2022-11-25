import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
// import { TestReduxComponent } from './TestReduxComponent/TestReduxComponent';
import { lazy } from 'react';
import { PrivateRoute, PublicRoute } from 'hocs';
const LoginPage = lazy(() => import('pages/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const DashboardPage = lazy(() => import('pages/Dashboard/DashboardPage'));
// const Layout = lazy(() => import('components/layout/Layout'));

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute restricted>
              <SignupPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
      </Route>
      {/* <Route path="/redux-test" element={<TestReduxComponent />}></Route> */}
    </Routes>
  );
}

export default App;
