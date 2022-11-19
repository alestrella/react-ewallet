import { Helmet } from 'react-helmet';
// import { useDispatch } from 'react-redux';
// import { logInUser } from '../redux';
import { useEffect } from 'react';

import { AuthForm } from 'components/AuthForm';

const LoginPage = () => {
  // const dispatch = useDispatch();
  useEffect(() => {
    console.log('errr');

  }, [])
  const handleSubmit = (values, { resetForm }) => {
    // try {
    //   // dispatch(logInUser({ email, password }));
    //   console.log(values);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(values);
    resetForm();
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <>
        <AuthForm onSubmit={handleSubmit} type={'Log in'} />
      </>
    </>
  );
};

export default LoginPage;
