import PropTypes from 'prop-types';
import { useDispatch} from 'react-redux';
import { logInUser, registerUser } from '../../redux';
import { Formik, Field } from 'formik';
import { useKeyLock } from 'hooks';
// import toast from 'react-hot-toast';
import { validationSchema } from 'validationSchema';
// import authSelectors from 'redux/auth/authSelectors';
import {
  MailFilled,
  LockFilled,
  UserOutlined,
} from '@ant-design/icons';
import {
  FormWrapper,
  LogoWrapper,
  PrimaryButton,
  StyledForm,
  StyledLink,
  InputWrapper,
  StyledInput,
  StyledInputPassword,
  WarningText
} from './AuthForm.styled';
import { FormError } from './FormError';
import { PasswordStrengthChecker } from './PasswordstrengthChecker';
import { AppLogo } from 'components/layout';



export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const capsLock = useKeyLock('CapsLock');
  // const userName = useSelector(authSelectors.getUsername);
  // const errorMessage = useSelector(authSelectors.getErrorMessage);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = ({ email, password, username }, { resetForm }) => {
    type === 'register'
    ? dispatch(registerUser({ email, password, username }))
    : dispatch(logInUser({ email, password }));
  // if (userName) {
  //   return toast.success(`Welcome ${userName}!`);
  // }
  //   if (errorMessage){
  //   return toast.error(`Something went wrong: ${errorMessage}`);
  // }
    resetForm();
  };
 
  return (
    <FormWrapper>
      <LogoWrapper>
        <AppLogo />
      </LogoWrapper>
      {capsLock && <WarningText>Caps Lock enabled!</WarningText>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(type)}
        onSubmit={handleSubmit}
      >
        {({ values, isValid, dirty }) => (
          <StyledForm noValidate>
            <InputWrapper>
              <Field
                type="email"
                name="email"
                >{({ field, form: { isSubmitting } }) => (
                  <StyledInput
                    {...field}
                    disabled={isSubmitting}
                    placeholder="E-mail"
                    bordered={false}
                    prefix={<MailFilled />}
                  />
                )}
              </Field>
              <FormError name="email" />
            </InputWrapper>
            <InputWrapper>
              <Field
                name="password">
                {({ field, form: { isSubmitting } }) => (
                  <StyledInputPassword
                    {...field}
                    disabled={isSubmitting}
                    placeholder="Password"
                    bordered={false}
                    prefix={<LockFilled />}
                  />
                )}
              </Field>
              <FormError name="password" />
            </InputWrapper>
            {type === 'register' && (
              <>
                <InputWrapper>
                  <Field
                    name="confirmPassword">
                   {({ field, form: { isSubmitting } }) => (
                      <StyledInputPassword
                        {...field}
                        disabled={isSubmitting}
                        placeholder="Confirm password"
                        bordered={false}
                        prefix={<LockFilled />}
                      />
                    )}
                 </Field>
                  <PasswordStrengthChecker password={values.password} />
                  <FormError name="confirmPassword" />
                </InputWrapper>
                <InputWrapper>
                  <Field
                    type="username"
                    name="username">
                    {({ field, form: { isSubmitting } }) => (
                      <StyledInput
                        {...field}
                        disabled={isSubmitting}
                        placeholder="First name"
                        bordered={false}
                        prefix={<UserOutlined />}
                      />
                    )}
                  </Field>
                  <FormError name="username" />
                </InputWrapper>
              </>
            )}
            {type === 'register' ? (
              <>
                    <PrimaryButton type="submit" disabled={!isValid || !dirty}>
                      register
                    </PrimaryButton>
                <StyledLink to="/login">log in</StyledLink>
              </>
            ) : (
              <>
                    <PrimaryButton disabled={!isValid || !dirty} type="submit">
                      log in
                    </PrimaryButton>
                <StyledLink to="/signup">register</StyledLink>
              </>
            )}
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
};
