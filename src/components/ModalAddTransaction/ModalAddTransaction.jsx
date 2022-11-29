import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import {
  Formik,
  // Field,
  // ErrorMessage,
} from 'formik';
import * as yup from 'yup';
// import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWindow,
  Title,
  StyledForm,
  InputWrapper,
  InputCategory,
  InputAmount,
  // InputDate,
  InputComment,
  PrimaryButton,
  SecondaryButton,
} from './ModalAddTransaction.styled';
import {
  Switcher,
  SwitchBox,
  Switch,
  StyledButton,
  Income,
  Expense,
} from './TypeSwitcher.styled';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import {
  addTransaction,
  categoriesSelectors,
  getCategories,
} from '../../redux';
// import './rdt-styles.css';

const modalRoot = document.getElementById('modal-root');

// const FormError = ({ name }) => {
//   return (
//     <ErrorMessage name={name} render={message => toast.error(`${message}`)} />
//   );
// };

const transactionSchema = yup.object().shape({
  sum: yup.number().required(),
  category: yup.string().required(),
  comment: yup.string(),
  // operationDate: yup
  //   .date()
  //   .default(() => new Date())
  //   .required(),
  type: yup.string().required(),
});

const ModalAddTransaction = ({ onClose }) => {
  const [typeTransaction, setTypeTransaction] = useState('expense');

  const initialValues = {
    category: '',
    comment: '',
    // operationDate: new Date(),
    type: false,
  };

  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelectors.getCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleIncome = e => {
    if (e.target.checked === true) {
      return setTypeTransaction('income');
    }
    setTypeTransaction('expense');
  };

  console.log('typeTransaction now >>>', typeTransaction);

  const handleSubmit = ({ sum, category, comment }, { resetForm }) => {
    console.log('comment inside submit', comment);

    dispatch(addTransaction({ sum, category, comment, type: typeTransaction }));

    console.log('inside handleSubmit', {
      sum,
      category,
      comment,
      type: typeTransaction,
    });
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
        >
          {({ setFieldValue }) => (
            <StyledForm autoComplete="off">
              <Switcher>
                <Income checked={typeTransaction === 'income'}>Income</Income>

                <SwitchBox>
                  <label htmlFor="type">
                    <Switch
                      name="type"
                      type="checkbox"
                      id="type"
                      onClick={e => handleIncome(e)}
                    />
                    {typeTransaction === 'income' ? (
                      <StyledButton checked={typeTransaction === 'income'}>
                        <PlusOutlined style={{ fontSize: '22px' }} />
                      </StyledButton>
                    ) : (
                      <StyledButton>
                        <MinusOutlined style={{ fontSize: '22px' }} />
                      </StyledButton>
                    )}
                  </label>
                </SwitchBox>

                <Expense checked={typeTransaction === 'expense'}>
                  Expense
                </Expense>
              </Switcher>

              <div>
                <label htmlFor="category" />
                <InputCategory name="category">
                  <option value="">Select a category</option>
                  {categories
                    .filter(elem => elem.type === typeTransaction)
                    .map(({ name, id }) => (
                      <option value={id} key={id}>
                        {name}
                      </option>
                    ))}
                </InputCategory>
                {/* <FormError name="category" /> */}
              </div>

              <InputWrapper>
                <div>
                  <label htmlFor="sum"></label>
                  <div>
                    <InputAmount name="sum" type="number" placeholder="0.00" />
                    {/* <FormError name="sum" /> */}
                  </div>
                </div>

                {/* <div>
                  <label htmlFor="operationDate"></label>
                  <InputDate>
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
                  </InputDate>
                </div> */}
              </InputWrapper>

              <div>
                <label htmlFor="comment" />
                <InputComment name="comment" placeholder="Comment" />
                {/* <Field name="comment" as="textarea" placeholder="Comment" /> */}
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

        {/* <Toaster position="top-center" /> */}
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default ModalAddTransaction;

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
};
