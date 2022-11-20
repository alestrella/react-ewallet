import { Helmet } from 'react-helmet';
import { AuthForm } from 'components/AuthForm';
import {
  Container,
  AuthPageTitleGroup,
  AuthPageImg,
  AuthPageTitle,
} from './AuthPage.style';
import loginPageImg from '../../components/img/loginPageImg.svg';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <AuthPageTitleGroup>
          <AuthPageImg src={loginPageImg} alt="Logo page image" />
          <AuthPageTitle>Finance App</AuthPageTitle>
        </AuthPageTitleGroup>
        <AuthForm type={'login'} />
      </Container>
    </>
  );
};

export default LoginPage;
