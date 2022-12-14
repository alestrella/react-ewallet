import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categoriesThunk';

const initialState = {
  categories: [],
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
