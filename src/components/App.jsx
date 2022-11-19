import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/login" element={<LoginPage />}></Route> */}
        {/* <Route path="/signup" element={<SignupPage />}></Route> */}
        <Route path="home" element={<Home />}></Route>
      </Route>
      <Route path="/redux-test" element={<TestReduxComponent />}></Route>
    </Routes>
  );
}

export default App;
