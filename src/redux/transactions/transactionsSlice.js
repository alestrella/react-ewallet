import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
} from './transactionsThunk';

const initialState = {
  page: 0,
  totalPages: 0,
  totalBalance: 0,
  transactions: [],
  isFetching: false,
  errorMessage: null,
};

const { temporaryData } = require('./temporaryData');

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { ...initialState, ...temporaryData }, // while developing back
  reducers: {
    resetError: state => {
      state.errorMessage = null;
    },
  },
  extraReducers: {
    [getTransactions.fulfilled](state, { payload }) {
      return {
        ...initialState,
        ...payload,
      };
    },
    [getTransactions.pending](state, _) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [getTransactions.rejected](state, { payload }) {
      return {
        ...initialState,
        page: state.page,
        totalPages: state.totalPages,
        errorMessage: payload,
      };
    },
    [addTransaction.fulfilled](state, { payload }) {
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    },
    [addTransaction.pending](state, _) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [addTransaction.rejected](state, { payload }) {
      return {
        ...state,
        errorMessage: payload,
      };
    },
    [deleteTransaction.fulfilled](state, { payload }) {
      return {
        ...state,
        transactions: state.transactions.filter(e => e.id !== payload.id),
      };
    },
    [deleteTransaction.pending](state, _) {
      return {
        ...state,
        isFetching: true,
      };
    },
    [deleteTransaction.rejected](state, { payload }) {
      return {
        ...state,
        errorMessage: payload,
      };
    },
  },
});

export const { resetError } = transactionsSlice.actions;
