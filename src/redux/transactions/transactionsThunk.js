import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { store } from '../store';
import { convertTransaction } from './convertTransaction';

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
      const transactions = data.transactions.map(
        convertTransaction.backToFront
      );
      data.transactions = transactions;
      return data;
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
      const postedRecord = convertTransaction.frontToBack(newRecord);
      const { data } = await axios.post(ENDPOINTS.add, postedRecord);
      store.dispatch(getTransactions(1)); // on success gets newest data
      return convertTransaction.backToFront(data);
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

export const getBalance = createAsyncThunk(
  'transactions/getbalance',
  async thunkAPI => {
    try {
      const getLink = `${ENDPOINTS.load}?page=1`;
      const { data } = await axios.get(getLink);
      return data.balance;
    } catch (err) {
      return thunkAPI.rejectWithValue(
        'Error ' + err.response.status + ': ' + err.response.message
      );
    }
  }
);
