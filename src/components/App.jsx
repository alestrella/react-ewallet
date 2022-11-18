import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Home = lazy(() => import('./Home'));
const Layout = lazy(() => import('./Layout'));
// import Home from './Home';
// import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route path="/signup" element={<SignupPage />}></Route> */}
        <Route path="home" element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
