import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import {
  Formik,
  Field,
  // ErrorMessage
} from 'formik';
import { FormError } from '../AuthForm/FormError';
import * as yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Media from 'react-media';
import PropTypes from 'prop-types';
import {
  Overlay,
  ModalWindow,
  CloseButton,
  Title,
  StyledForm,
  InputBox,
  InputWrapper,
  InputCategory,
  InputAmount,
  InputDate,
  CalendarIcon,
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
import './rdt-styles.css';

const modalRoot = document.getElementById('modal-root');

const transactionSchema = yup.object().shape({
  sum: yup.number().required(),
  category: yup.string().required(),
  comment: yup.string(),
  date: yup
    .date()
    .default(() => new Date().toISOString())
    .required(),
  type: yup.string().required(),
});

const ModalAddTransaction = ({ onClose }) => {
  const [sum, setSum] = useState();
  const [comment, setComment] = useState();
  const [typeTransaction, setTypeTransaction] = useState('expense');
  const { t } = useTranslation();

  const initialValues = {
    category: '',
    comment: '',
    date: new Date().toISOString(),
    type: false,
  };

  const dispatch = useDispatch();

  const categories = useSelector(categoriesSelectors.getCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'sum':
        setSum(value);
        break;

      case 'comment':
        setComment(value);
        break;

      default:
        break;
    }
  };

  const handleIncome = e => {
    if (e.target.checked === true) {
      return setTypeTransaction('income');
    }
    setTypeTransaction('expense');
  };

  // console.log('typeTransaction now >>>', typeTransaction);

  const handleSubmit = ({ sum, category, comment, date }, { resetForm }) => {
    // console.log('comment inside submit', comment);

    dispatch(
      addTransaction({
        sum,
        category,
        comment,
        date,
        type: typeTransaction,
      })
    );

    // console.log('inside handleSubmit', {
    //   sum,
    //   category,
    //   comment,
    //   date,
    //   type: typeTransaction,
    // });
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
        <Media
          query="(min-width: 768px)"
          render={() => <CloseButton onClick={() => onClose()} />}
        />

        <Title>{t('ModalAdd.Category')}</Title>

        <Formik
          initialValues={initialValues}
          validationSchema={transactionSchema}
          onSubmit={handleSubmit}
          onChange={handleChange}
        >
          {({ setFieldValue }) => (
            <StyledForm autoComplete="off">
              <Switcher>
                <Income checked={typeTransaction === 'income'}>
                  {t('ModalAdd.income')}
                </Income>

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
                  {t('ModalAdd.expense')}
                </Expense>
              </Switcher>

              <InputCategory>
                <label htmlFor="category" />
                <Field name="category" as="select">
                  <option value="">{t('ModalAdd.modalTitle')}</option>
                  {categories
                    .filter(elem => elem.type === typeTransaction)
                    .map(({ name, id }) => (
                      <option value={id} key={id}>
                        {name}
                      </option>
                    ))}
                </Field>
                <FormError name="category" />
              </InputCategory>

              <InputBox>
                <InputWrapper>
                  <label htmlFor="sum" />
                  <InputAmount
                    name="sum"
                    type="number"
                    value={sum}
                    placeholder="0.00"
                  />
                  <FormError name="sum" />
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="date" />
                  <InputDate>
                    <Field name="date">
                      {({ field, form: { isSubmitting } }) => (
                        <Datetime
                          dateFormat="DD.MM.YYYY"
                          timeFormat={false}
                          initialValue={new Date()}
                          onChange={date => {
                            setFieldValue('date', date.toISOString());
                          }}
                        />
                      )}
                    </Field>
                    {/* <FormError name="date" /> */}
                    <CalendarIcon />
                  </InputDate>
                </InputWrapper>

                <InputWrapper>
                  <label htmlFor="comment" />
                  <InputComment
                    name="comment"
                    value={comment}
                    placeholder="Comment"
                  />
                  {/* <Field name="comment" as="textarea" placeholder="Comment" /> */}
                </InputWrapper>
              </InputBox>

              <PrimaryButton type="primary" htmlType="submit">
                {t('ModalAdd.ButtonAdd')}
              </PrimaryButton>

              <SecondaryButton htmlType="button" onClick={() => onClose()}>
                {t('ModalAdd.ButtonCensel')}
              </SecondaryButton>
            </StyledForm>
          )}
        </Formik>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default ModalAddTransaction;

ModalAddTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
};
