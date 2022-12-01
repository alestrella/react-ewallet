import { Route, Routes, useSearchParams } from 'react-router-dom';
import { Layout } from './layout/Layout';
// import { TestReduxComponent } from './TestReduxComponent/TestReduxComponent';
import { lazy, useEffect } from 'react';
import { PrivateRoute, PublicRoute } from 'hocs';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, reconnectUser, token } from '../redux';
import { Navigate } from 'react-router-dom/dist';
import { LoaderSpinner } from './Loader/Loader';
import { setGoogleAuth } from 'redux/auth/authSlice';

const LoginPage = lazy(() => import('pages/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const DashboardPage = lazy(() => import('pages/Dashboard'));
// const Layout = lazy(() => import('components/layout/Layout'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));

function App() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const isFetching = useSelector(authSelectors.getIsFetching);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (!accessToken) {
      return;
    }
    token.set(accessToken);
    dispatch(setGoogleAuth({ accessToken, refreshToken }));
    // authHeader.set(accessToken);
    dispatch(reconnectUser());
  }, [dispatch, searchParams]);

  return isFetching ? (
    <LoaderSpinner />
  ) : (
    <>
      {/* <WarningDispatcher /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="login"
            element={
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
              <PublicRoute
                restricted
                redirectTo="/dashboard"
                component={<SignupPage />}
              />
            }
          />
          {/* <Route
            path="google"
            element={
              <PublicRoute
                restricted
                redirectTo="/dashboard"
                component={<GoogleAuthPage />}
              />
            }
          /> */}
          <Route
            path="dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          />
          <Route
            path="statistic"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          />

          <Route
            path="currency"
            element={
              <PrivateRoute redirectTo="/login" component={<CurrencyPage />} />
            }
          />
        </Route>
        {/* <Route path="/redux-test" element={<TestReduxComponent />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
