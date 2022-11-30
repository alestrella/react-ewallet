import * as Yup from 'yup';

const authValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email address format')
    .min(10)
    .max(63)
    .matches(
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]*\w{3,}@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{1,63})$/i,
      "must necessarily contain the sign '@' and '.' - there must be at least 2 characters before the '@'; the field can contain hyphens, and the it cannot be at the beginning or end of the Email"
    )
    .required('please, enter your email'),
  password: Yup.string()
    .min(8)
    .max(16)
    .matches(/^\S+$/, 'must not contain spaces')
    .required('please, enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'passwords must match')
    .required('please, confirm your password'),
  username: Yup.string()
    .min(3)
    .max(12)
    .matches(/^\S+$/, 'must not contain spaces')
    .required('please, enter your name'),
});

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('invalid email address format')
    .min(10)
    .max(63)
    .matches(
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{1,63})$/i,
      "must necessarily contain the sign '@' and '.' - there must be at least 2 characters before the '@'; the field can contain hyphens, and it cannot be at the beginning or end of the Email"
    )
    .required('please, enter your email'),
  password: Yup.string()
    .min(8)
    .max(16)
    .matches(/^\S+$/, 'must not contain spaces')
    .required('please, enter your password'),
});

export const validationSchema = type => {
  if (type === 'register') {
    return authValidationSchema;
  } else {
    return loginValidationSchema;
  }
};
