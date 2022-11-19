import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { lazy} from 'react';

const LoginPage = lazy(() => import('pages/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
