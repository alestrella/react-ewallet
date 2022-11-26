import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
// import { TestReduxComponent } from './TestReduxComponent/TestReduxComponent';
import { lazy, useEffect } from 'react';
import { PrivateRoute, PublicRoute } from 'hocs';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import { reconnectUser } from '../redux/auth/authThunk';
import { Navigate } from 'react-router-dom/dist';
import { LoaderSpinner } from './Loader/Loader';

const LoginPage = lazy(() => import('pages/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const DashboardPage = lazy(() => import('pages/Dashboard/DashboardPage'));
// const Layout = lazy(() => import('components/layout/Layout'));

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    dispatch(reconnectUser());
  }, [dispatch]);

  return isFetching ? (
    <LoaderSpinner />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="login"
          element={
            // <PublicRoute restricted redirectTo="/dashbord">
            //   <LoginPage />
            // </PublicRoute>
            <PublicRoute
              restricted
              redirectTo="/dashboard"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="signup"
          element={
            // <PublicRoute restricted redirectTo="/dashbord">
            //   <SignupPage />
            // </PublicRoute>
            <PublicRoute
              restricted
              redirectTo="/dashboard"
              component={<SignupPage />}
            />
          }
        />
        <Route
          path="dashboard"
          element={
            // <PrivateRoute redirectTo="/login">
            //   <DashboardPage />
            // </PrivateRoute>
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
      </Route>
      {/* <Route path="/redux-test" element={<TestReduxComponent />}></Route> */}
    </Routes>
  );
}

export default App;
