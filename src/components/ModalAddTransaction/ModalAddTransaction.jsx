import React from 'react';
// import { useState, useEffect } from 'react';
import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWindow,
  StyledForm,
  Title,
  PrimaryButton,
  SecondaryButton,
} from './ModalAddTransaction.styled';
// import { Button } from 'antd';

import { addTransaction } from '../../redux';

const modalRoot = document.getElementById('modal-root');

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => toast.error(`${message}`)} />
  );
};

const expenseCategory = [
  'Main',
  'Food',
  'Auto',
  'Development',
  'Children',
  'House',
  'Education',
  'Reset',
];

const transactionSchema = yup.object().shape({
  amount: yup.number().required(),
  category: yup.string().oneOf(expenseCategory),
  comment: yup.string(),
  date: yup
    .date()
    .default(() => new Date())
    .required(),
  // income: yup.boolean().required(),
});

const ModalAddTransaction = ({ onClose }) => {
  // const [amount, setAmount] = useState('');
  // const [category, setCategory] = useState('');
  // const [comment, setComment] = useState('');
  // const [date, setDate] = useState('');
  // const [income, setIncome] = useState(false);

  const initialValues = {
    amount: '',
    category: '',
    comment: '',
    date: new Date(),
    income: false,
  };

  const dispatch = useDispatch();

  // const handleChange = e => {
  //   const { name, value } = e.target;

  //   switch (name) {
  //     case 'amount':
  //       setAmount(value);
  //       break;

  //     case 'date':
  //       setDate(value);
  //       break;

  //     case 'comment':
  //       setComment(value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const handleSubmit = (
    { amount, category, comment, date, income },
    { resetForm }
  ) => {
    // const newTransaction = {
    //   amount,
    //   category,
    //   comment,
    //   date,
    //   income,
    // };

    dispatch(addTransaction({ amount, category, comment, date, income }));

    console.log({ amount, category, comment, date, income });
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <Title>Add transaction</Title>

        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={handleSubmit}
          // onChange={handleChange}
        >
          {({ setFieldValue }) => (
            <StyledForm autoComplete="off">
              <div>
                <div>
                  <label htmlFor="income">
                    <Field name="income" type="checkbox" />
                    Income
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="category" />
                <div>
                  <Field name="category" as="select">
                    <option value="">Select a category</option>
                    {expenseCategory.map((category, idx) => (
                      <option value={category} key={idx}>
                        {category}
                      </option>
                    ))}
                  </Field>
                  <FormError name="category" />
                </div>
              </div>

              <div>
                <label htmlFor="amount"></label>
                <div>
                  <Field name="amount" type="number" placeholder="0.00" />
                  <FormError name="amount" />
                </div>
              </div>

              <div>
                <label htmlFor="date"></label>
                <div>
                  <Field name="date">
                    {({ field, form: { isSubmitting } }) => (
                      <Datetime
                        dateFormat="DD.MM.YYYY"
                        timeFormat={false}
                        initialValue={new Date()}
                        onChange={date => {
                          setFieldValue('date', date.format('YYYY-MM-DD'));
                        }}
                      />
                    )}
                  </Field>
                  <FormError name="date" />
                </div>
              </div>

              <div>
                <label htmlFor="comment"></label>
                <div>
                  <Field name="comment" as="textarea" placeholder="Comment" />
                </div>
              </div>

              <PrimaryButton type="primary" htmlType="submit">
                Add
              </PrimaryButton>

              <SecondaryButton htmlType="button" onClick={() => onClose()}>
                Cancel
              </SecondaryButton>
            </StyledForm>
          )}
        </Formik>

        <Toaster position="top-center" />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default ModalAddTransaction;

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
};
