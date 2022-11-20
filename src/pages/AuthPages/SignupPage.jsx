import { Helmet } from 'react-helmet';
import { AuthForm } from 'components/AuthForm';
import {
  Container,
  AuthPageTitleGroup,
  AuthPageImg,
  AuthPageTitle,
} from './AuthPage.style';
import registerPageImg from '../../components/img/registerPageImg.svg';

const SignupPage = () => {

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Container>
      <AuthPageTitleGroup>
          <AuthPageImg src={registerPageImg} alt="Logo page image" />
          <AuthPageTitle>Finance App</AuthPageTitle>
        </AuthPageTitleGroup>
        <AuthForm type={'register'} />
      </Container>
    </>
  );
};

export default SignupPage;
