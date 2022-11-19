import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout';

import { TestReduxComponent } from './TestReduxComponent/TestReduxComponent';
import { lazy} from 'react';
// import { PrivateRoute, PublicRoute } from 'hocs';

const LoginPage = lazy(() => import('pages/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const DashboardPage = lazy(() => import('pages/DashboardPage'));


// import Home from './Home';
// const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="login"/>} />
        <Route path="login" element={<LoginPage />}/>
        <Route path="signup" element={<SignupPage />}/>
        <Route path="dashboard" element={<DashboardPage/>}/>
             {/* <Route index path="/login" element={<PublicRoute restricted ><LoginPage/></PublicRoute>} />
        <Route path="/signup"  element={<PublicRoute restricted><SignupPage/></PublicRoute>}/>
        <Route path="/dashboard/*" element={<PrivateRoute><DashboardPage/></PrivateRoute>} /> */}

        <Route path="home" element={<Home />}></Route>

      </Route>
      <Route path="/redux-test" element={<TestReduxComponent />}></Route>
    </Routes>
  );
}

export default App;
