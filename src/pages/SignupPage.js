import { Helmet } from 'react-helmet';
// import { useDispatch } from 'react-redux';
// import { logInUser } from '../redux';

import { AuthForm } from 'components/AuthForm';

const SignupPage = () => {
  // const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    try {
      // dispatch(logInUser({ email, password }));
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <>
        <AuthForm onSubmit={handleSubmit} type={'Sign Up'} />
      </>
    </>
  );
};

export default SignupPage;
