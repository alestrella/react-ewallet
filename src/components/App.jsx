import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route path="/signup" element={<SignupPage />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
