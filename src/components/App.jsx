import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layout/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route path="/signup" element={<SignupPage />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
