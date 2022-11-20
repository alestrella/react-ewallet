import { Helmet } from 'react-helmet';


import { AuthForm } from 'components/AuthForm';
import styled from 'styled-components';

const LoginPage = () => {

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <FormWrapper>
        <AuthForm type={"login"} />
      </FormWrapper>
    </>
  );
};

export default LoginPage;

const FormWrapper = styled.div`
margin: 0 auto;
`

