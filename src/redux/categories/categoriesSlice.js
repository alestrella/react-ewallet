import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './categoriesThunk';

const initialState = {
  categories: [],
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
