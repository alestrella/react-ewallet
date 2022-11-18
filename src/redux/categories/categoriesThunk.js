import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios baseUrl initializes in the index.js

// endpoint addresses
const ENDPOINTS = {
  load: '/categories',
};

export const getCategories = createAsyncThunk(
  'categories/load',
  async thunkAPI => {
    try {
      const { data } = await axios.get(ENDPOINTS.load);
      return { categories: data.categories }; // check this
    } catch (err) {
      return thunkAPI.rejectWithValue(
        'Error ' + err.response.status + ': ' + err.response.message
      );
    }
  }
);
