import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
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

import {
  addTransaction,
  categoriesSelectors,
  getCategories,
} from '../../redux';

const modalRoot = document.getElementById('modal-root');

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => toast.error(`${message}`)} />
  );
};

const transactionSchema = yup.object().shape({
  sum: yup.number().required(),
  category: yup.string().required(),
  comment: yup.string(),
  operationDate: yup
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
  const [income, setIncome] = useState('expense');

  const initialValues = {
    sum: 0,
    category: '',
    comment: '',
    operationDate: new Date(),
    income: false,
  };

  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelectors.getCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleIncome = e => {
    if (e.target.checked === true) return setIncome('income');
    setIncome('expense');
  };

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
    { sum, category, comment, operationDate, income },
    { resetForm }
  ) => {
    // const newTransaction = {
    //   amount,
    //   category,
    //   comment,
    //   date,
    //   income,
    // };

    dispatch(addTransaction({ sum, category, comment, operationDate, income }));

    console.log({ sum, category, comment, operationDate, income });
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
                    <Field
                      name="income"
                      type="checkbox"
                      // checked={income}
                      onClick={e => handleIncome(e)}
                    />
                    Income
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="category" />
                <div>
                  <Field name="category" as="select">
                    <option value="">Select a category</option>
                    {categories
                      .filter(elem => elem.type === income)
                      .map(({ name, id }) => (
                        <option value={id} key={id}>
                          {name}
                        </option>
                      ))}
                  </Field>
                  {/* <FormError name="category" /> */}
                </div>
              </div>

              <div>
                <label htmlFor="sum"></label>
                <div>
                  <Field name="sum" type="number" placeholder="0.00" />
                  <FormError name="sum" />
                </div>
              </div>

              <div>
                <label htmlFor="operationDate"></label>
                <div>
                  <Field name="operationDate">
                    {({ field, form: { isSubmitting } }) => (
                      <Datetime
                        dateFormat="DD.MM.YYYY"
                        timeFormat={false}
                        initialValue={new Date()}
                        onChange={operationDate => {
                          setFieldValue(
                            'operationDate',
                            operationDate.format('YYYY-MM-DD')
                          );
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
