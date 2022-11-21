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
  extraReducers: {
    [logInUser.fulfilled](state, { payload }) {
      return {
        ...initialState,
        username: payload.username,
        token: payload.token,
        isLoggedIn: true,
      };
    },
    [registerUser.fulfilled](state, { payload }) {
      state.isFetching = false;
    },
    [logOutUser.fulfilled](state, _) {
      return { ...initialState };
    },
    [reconnectUser.fulfilled](state, { payload }) {
      return { ...state, isLoggedIn: true, isFetching: false };
    },
    [logInUser.pending](state, _) {
      return { ...state, isFetching: true };
    },
    [registerUser.pending](state, _) {
      return { ...state, isFetching: true };
    },
    [logOutUser.pending](state, _) {
      return { ...state, isFetching: true };
    },
    [reconnectUser.pending](state, _) {
      return { ...state, isFetching: true };
    },
    [logInUser.rejected](state, { payload }) {
      return {
        ...initialState,
        username: state.username, // debatable
        token: state.token, // debatable
        errorMessage: payload,
      };
    },
    [registerUser.rejected](state, { payload }) {
      return {
        ...initialState,
        errorMessage: payload,
      };
    },
    [logOutUser.rejected](state, { payload }) {
      return { ...initialState, errorMessage: payload };
    },
    [reconnectUser.rejected](state, { payload }) {
      return { ...initialState, errorMessage: payload };
    },
  },
});

export const { resetError } = authSlice.actions;
