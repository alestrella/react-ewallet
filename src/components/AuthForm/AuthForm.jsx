import { useEffect, useState } from 'react';
import { Formik } from 'formik';
// import * as yup from 'yup';
// import { yupEmailValidation, yupPasswordValidation } from 'validationSchema';
// import {MailFilled} from "@ant-design/icons";
import { Label, 
         PrimaryButton, 
         ShowPasswordButton, 
         StyledForm, 
         FormInput, 
         InputWrapper} from "./AuthForm.styled";
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FormError } from './FormError';



export const AuthForm = ({onSubmit, type, register = false}) => {
  // const [passwordShown, setPasswordShown] = useState(false);
  
  const initialValues = {
    // name: '',
    email: '',
    password: '',
  };
      
  // const schema = register ? 
  // yup.object({
  //   ...yupPasswordValidation,
  //   ...yupEmailValidation,
  //   name: yup.string().required('Please, enter your name'),
  // }) : 
  // yup.object({
  //   ...yupPasswordValidation,
  //   ...yupEmailValidation,
  // });
   

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={onSubmit}>
        <StyledForm noValidate>
          {/* {register && (
            <>
              <Label htmlFor='name'>Name</Label>
              <FormInput type='name' name='name'/>
              <FormError name="name"/>
            </>
          )} */}
            {/* <Label htmlFor='email'><MailFilled /></Label> */}
            <FormInput type='email' name='email' placeholder="Email"/>
            {/* <FormError name="email"/> */}
            <Label htmlFor='password'>Password</Label>
            {/* <InputWrapper> */}
              <FormInput  name="password"/>
              {/* type={passwordShown ? 'text' : 'password'} */}
                {/* <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="password button tooltip">show password</Tooltip>}> */}
                  {/* <ShowPasswordButton
                    onClick={togglePassword}
                    type="button">Eye
                    <FaRegEye size={30} />
                  </ShowPasswordButton> */}
                {/* </OverlayTrigger> */}
            {/* </InputWrapper> */}
            {/* <FormError name="password"/> */}
            <PrimaryButton type='submit'>
              {type}
            </PrimaryButton>  
        </StyledForm>
    </Formik>
  );
};


