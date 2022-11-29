import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import {
  addTransaction,
  deleteTransaction,
  getTransactions,
  getBalance,
} from './transactionsThunk';

const initialState = {
  page: 0,
  totalPages: 0,
  totalBalance: 0,
  transactions: [],
  isFetching: false,
  errorMessage: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { ...initialState },
  reducers: {
    resetError: state => {
      state.errorMessage = null;
    },
  },
<<<<<<< HEAD
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
        ...initialState,
        ...payload,
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
        ...initialState,
        ...payload,
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
=======
  extraReducers: builder => {
    builder
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        return {
          ...initialState,
          ...payload,
        };
      })
      .addCase(getTransactions.pending, (state, _) => {
        return {
          ...state,
          isFetching: true,
        };
      })
      .addCase(getTransactions.rejected, (state, { payload }) => {
        toast(payload);
        return {
          ...initialState,
          page: state.page,
          totalPages: state.totalPages,
          errorMessage: payload,
        };
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions.pop();
        return {
          ...state,
          transactions: [payload, ...state.transactions],
        };
      })
      .addCase(addTransaction.pending, (state, _) => {
        return {
          ...state,
          isFetching: true,
        };
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        toast(payload);
        return {
          ...state,
          errorMessage: payload,
        };
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        return {
          ...state,
          transactions: state.transactions.filter(e => e.id !== payload.id),
        };
      })
      .addCase(deleteTransaction.pending, (state, _) => {
        return {
          ...state,
          isFetching: true,
        };
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        toast(payload);
        return {
          ...state,
          errorMessage: payload,
        };
      })
      .addCase(getBalance.fulfilled, (state, { payload }) => {
        return {
          ...state,
          balance: payload,
        };
      })
      .addCase(getBalance.pending, (state, _) => {
        return {
          ...state,
          balance: 'loading...',
        };
      })
      .addCase(getBalance.rejected, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
        };
      });
>>>>>>> dev
  },
});

export const { resetError } = transactionsSlice.actions;
