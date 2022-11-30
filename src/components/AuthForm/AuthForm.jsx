import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from '../../redux';
import { Formik, Field } from 'formik';
import { useKeyLock } from 'hooks';
import { validationSchema } from 'validationSchema';

import { MailFilled, LockFilled, UserOutlined } from '@ant-design/icons';
import {
  FormWrapper,
  LogoWrapper,
  PrimaryButton,
  StyledForm,
  StyledLink,
  InputWrapper,
  StyledInput,
  StyledInputPassword,
  WarningText,
} from './AuthForm.styled';
import { FormError } from './FormError';
import { PasswordStrengthChecker } from './PasswordstrengthChecker.jsx';
import { AppLogo } from 'components/Logo/Logo';

export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();
  const capsLock = useKeyLock('CapsLock');

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
        {({ values, isValid, dirty, touched, errors }) => (
          <StyledForm noValidate>
            {capsLock && <WarningText>Caps Lock enabled!</WarningText>}
            <InputWrapper>
              <Field type="email" name="email">
                {({ field, form: { isSubmitting } }) => (
                  <StyledInput
                    {...field}
                    disabled={isSubmitting}
                    placeholder="E-mail"
                    bordered={false}
                    prefix={<MailFilled />}
                  />
                )}
              </Field>
              {touched.email && errors.email && <FormError name="email" />}
            </InputWrapper>
            <InputWrapper>
              <Field name="password" type="password">
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
              {touched.password && errors.password && (
                <FormError name="password" />
              )}
            </InputWrapper>
            {type === 'register' && (
              <>
                <InputWrapper>
                  <Field name="confirmPassword" type="password">
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
                  {touched.confirmPassword && errors.confirmPassword && (
                    <FormError name="confirmPassword" />
                  )}
                </InputWrapper>
                <InputWrapper>
                  <Field type="username" name="username">
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
                  {touched.username && errors.username && (
                    <FormError name="username" />
                  )}
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
