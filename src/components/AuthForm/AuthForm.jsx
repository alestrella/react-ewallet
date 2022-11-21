import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser, registerUser } from '../../redux';
import { Formik, Field } from 'formik';
import toast from 'react-hot-toast';
import { validationSchema } from 'validationSchema';
import authSelectors from 'redux/auth/authSelectors';
import {
  MailFilled,
  LockFilled,
  UserOutlined,
  // EyeInvisibleOutlined,
  // EyeTwoTone,
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
} from './AuthForm.styled';
import { FormError } from './FormError';
import { PasswordStrengthChecker } from './PasswordstrengthChecker';
import { AppLogo } from 'components/layout';

export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.getUsername);
  // const errorMessage = useSelector(authSelectors.getErrorMessage);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = ({ email, password, username }, { resetForm }) => {
  //  try {
    type === 'register'
    ? dispatch(registerUser({ email, password, username }))
    : dispatch(logInUser({ email, password }));
  if (userName) {
    return toast.success(`Welcome ${userName}!`);
  }
  //  } catch (error) {
  //   toast.error(`Something went wrong: ${error}`);
  //  }

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(type)}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
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
                <Field>
                  {({ form: { isSubmitting } }) => (
                    <PrimaryButton type="submit" disabled={isSubmitting}>
                      register
                    </PrimaryButton>
                  )}
                </Field>
                <StyledLink to="/login">log in</StyledLink>
              </>
            ) : (
              <>
                <Field>
                  {({ form: { isSubmitting } }) => (
                    <PrimaryButton disabled={isSubmitting} type="submit">
                      log in
                    </PrimaryButton>
                  )}
                </Field>
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
