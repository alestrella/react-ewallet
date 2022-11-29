import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categoriesThunk';

const initialState = {
  categories: [
    {
      id: '001',
      name: 'Basic expenses',
    },
    {
      id: '002',
      name: 'Products',
    },
    {
      id: '003',
      name: 'Car',
    },
    {
      id: '004',
      name: 'Self care',
    },
    {
      id: '005',
      name: 'Child care',
    },
    {
      id: '006',
      name: 'Household products',
    },
    {
      id: '007',
      name: 'Education',
    },
    {
      id: '008',
      name: 'Leisure',
    },
  ],
  errorMessage: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        return {
          ...state,
          categories: [...payload],
        };
      })
      .addCase(getCategories.rejected, (state, { payload }) => {
        return {
          ...state,
          errorMessage: payload,
        };
      });
  },
});
