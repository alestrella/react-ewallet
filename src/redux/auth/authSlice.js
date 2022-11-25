import { createSlice } from '@reduxjs/toolkit';
import {
  logInUser,
  logOutUser,
  reconnectUser,
  registerUser,
} from './authThunk';

const initialState = {
  username: null,
  token: null,
  isLoggedIn: false,
  isFetching: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: state => {
      state.errorMessage = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        return {
          ...initialState,
          ...payload,
          isLoggedIn: true,
        };
      })
      .addCase(logInUser.pending, (state, _) => {
        return { ...state, isFetching: true };
      })
      .addCase(logInUser.rejected, (state, { payload }) => {
        return {
          ...initialState,
          username: state.username, // debatable
          token: state.token, // debatable
          errorMessage: payload,
        };
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          ...initialState,
          ...payload,
          isLoggedIn: true,
        };
      })
      .addCase(registerUser.pending, (state, _) => {
        return { ...state, isFetching: true };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        return {
          ...initialState,
          errorMessage: payload,
        };
      })
      .addCase(logOutUser.fulfilled, (state, _) => {
        return { ...initialState };
      })
      .addCase(logOutUser.pending, (state, _) => {
        return { ...state, isFetching: true };
      })
      .addCase(logOutUser.rejected, (state, { payload }) => {
        return { ...initialState, errorMessage: payload };
      })
      .addCase(reconnectUser.fulfilled, (state, { payload }) => {
        return { ...state, isLoggedIn: true, isFetching: false };
      })
      .addCase(reconnectUser.pending, (state, _) => {
        return { ...state, isFetching: true };
      })
      .addCase(reconnectUser.rejected, (state, { payload }) => {
        return { ...initialState, errorMessage: payload };
      });
  },
});

export const { resetError } = authSlice.actions;
