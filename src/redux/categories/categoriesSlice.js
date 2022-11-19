import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categoriesThunk';

const initialState = {
  categories: [
    {
      id: '000000000000000000000000',
      name: 'Other expenses',
    },
    {
      id: '000000000000000000000001',
      name: 'Basic expenses',
    },
    {
      id: '000000000000000000000002',
      name: 'Products',
    },
    {
      id: '000000000000000000000003',
      name: 'Car',
    },
    {
      id: '000000000000000000000004',
      name: 'Self care',
    },
    {
      id: '000000000000000000000005',
      name: 'Child care',
    },
    {
      id: '000000000000000000000006',
      name: 'Household products',
    },
    {
      id: '000000000000000000000007',
      name: 'Education',
    },
    {
      id: '000000000000000000000008',
      name: 'Leisure',
    },
  ],
  errorMessage: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [getCategories.fulfilled](state, { payload }) {
      return {
        ...initialState,
        ...payload,
      };
    },
    [getCategories.rejected](state, { payload }) {
      return {
        ...state,
        errorMessage: payload,
      };
    },
  },
});
