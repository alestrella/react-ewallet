import * as Yup from 'yup';

const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email address format')
    .required('please, enter your email'),
  password: Yup.string().min(8).max(12)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/,
      'must contain 8 or more up to 12 characters inclusive: uppercase, lowercase letters, a number and a special case character'
    )
    .required('please, enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')
    .required('please, confirm your password'),
  username: Yup.string().min(1).max(12).required('please, enter your name'),
});

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email address format')
    .required('please, enter your email'),
  password: Yup.string().min(8).max(12)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/,
      'must contain 8 or more up to 12 characters inclusive: uppercase, lowercase letters, a number and a special case character'
    )
    .required('please, enter your password'),
});

export const validationSchema = type => {
  if (type === 'register') {
    return authValidationSchema;
  } else {
    return loginValidationSchema;
  }
};
