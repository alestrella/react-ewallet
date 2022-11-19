import { useDispatch } from 'react-redux';
import { logInUser, registerUser } from '../../redux';
import { Formik, Field } from 'formik';
import { validationSchema } from 'validationSchema';
import {
  MailFilled,
  LockFilled,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons';
import {
  FormWrapper,
  PrimaryButton,
  StyledForm,
  StyledLink,
  InputWrapper,
  StyledInput,
  StyledInputPassword,
} from './AuthForm.styled';
import { FormError } from './FormError';
import { PasswordStrengthChecker } from './PasswordstrengthChecker';


export const AuthForm = ({ type }) => {
  const dispatch = useDispatch();

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = ({ email, password, username }, { resetForm }) => {
    alert(JSON.stringify({ email, password, username }, null, 2));
    type === 'register'
      ? dispatch(registerUser({ email, password, username }))
      : dispatch(logInUser({ email, password }));
    resetForm();
  };

  return (
    <FormWrapper>
      <h1>Wallet</h1>
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
              render={({ field, form: { isSubmitting } }) => (
                <StyledInput
                  {...field}
                  disabled={isSubmitting}
                  placeholder="E-mail"
                  bordered={false}
                  prefix={<MailFilled />}
                  iconRender={visible =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              )}
            />
            <FormError name="email" />
          </InputWrapper>
          <InputWrapper>
            <Field
              name="password"
              render={({ field, form: { isSubmitting } }) => (
                <StyledInputPassword
                  {...field}
                  disabled={isSubmitting}
                  placeholder="Password"
                  bordered={false}
                  prefix={<LockFilled />}
                />
              )}
            />
            <FormError name="password" />
          </InputWrapper>
          {type === 'register' && (
            <>
              <InputWrapper>
                <Field
                  name="confirmPassword"
                  render={({ field, form: { isSubmitting } }) => (
                    <StyledInputPassword
                      {...field}
                      disabled={isSubmitting}
                      placeholder="Confirm password"
                      bordered={false}
                      prefix={<LockFilled />}
                    />
                  )}
                />
                <PasswordStrengthChecker password={values.password} />
                <FormError name="confirmPassword" />
              </InputWrapper>
              <InputWrapper>
                <Field
                  type="username"
                  name="username"
                  render={({ field, form: { isSubmitting } }) => (
                    <StyledInput
                      {...field}
                      disabled={isSubmitting}
                      placeholder="First name"
                      bordered={false}
                      prefix={<UserOutlined />}
                    />
                  )}
                />
                <FormError name="username" />
              </InputWrapper>
            </>
          )}
          {type === 'register' ? (
            <>
              <Field
                render={({ form: { isSubmitting } }) => (
                  <PrimaryButton type="submit" disabled={isSubmitting}>
                    register
                  </PrimaryButton>
                )}
              />
              <StyledLink to="/login">log in</StyledLink>
            </>
          ) : (
            <>
              <Field
                render={({ form: { isSubmitting } }) => (
                  <PrimaryButton disabled={isSubmitting} type="submit">
                    log in
                  </PrimaryButton>
                )}
              />
              <StyledLink to="/signup">register</StyledLink>
            </>
          )}
        </StyledForm>
      )}
    </Formik>
    </FormWrapper>
  );
};
