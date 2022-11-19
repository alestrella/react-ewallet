import { Helmet } from 'react-helmet';


import { AuthForm } from 'components/AuthForm';

const SignupPage = () => {

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <>
        <AuthForm type={'register'} />
      </>
    </>
  );
};

export default SignupPage;
