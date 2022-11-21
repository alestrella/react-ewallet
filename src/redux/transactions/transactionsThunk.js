import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../store';

// axios baseUrl initializes in the index.js

// endpoint addresses
const ENDPOINTS = {
  load: '/transactions',
  add: '/transactions',
  delete: '/transactions',
};

export const getTransactions = createAsyncThunk(
  'transactions/load',
  async (pageNum, thunkAPI) => {
    try {
      const getLink = pageNum
        ? `${ENDPOINTS.load}?page=${pageNum}`
        : ENDPOINTS.load;
      const { data } = await axios.get(getLink);
      return data; // check this
    } catch (err) {
      return thunkAPI.rejectWithValue(
        'Error ' + err.response.status + ': ' + err.response.message
      );
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transactions/add',
  async (newRecord, thunkAPI) => {
    try {
      const { data } = await axios.post(ENDPOINTS.add, newRecord);
      store.dispatch(getTransactions(1)); // on success gets newest data
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        'Error ' + err.response.status + ': ' + err.response.message
      );
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/delete',
  async (transactionId, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${ENDPOINTS.delete}/${transactionId}`
      );
      // on success gets the same page ---------------
      const state = store.getState();
      const page = state.transactions.page || 1;
      store.dispatch(getTransactions(page));
      // ---------------------------------------------
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        'Error ' + err.response.status + ': ' + err.response.message
      );
    }
  }
);
