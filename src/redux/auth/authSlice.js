import { createSlice } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
import {
  logInUser,
  logOutUser,
  reconnectUser,
  registerUser,
  reLogInUser,
} from './authThunk';

const initialState = {
  username: null,
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isFetching: false,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setGoogleAuth(state, action) {
      state.token = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
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
          username: state.username,
          refreshToken: state.refreshToken,
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
        // toast(payload);
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
        // toast(payload);
        return { ...initialState, errorMessage: payload };
      })
      .addCase(reconnectUser.fulfilled, (state, { payload }) => {
        return { ...state, ...payload, isLoggedIn: true, isFetching: false };
      })
      .addCase(reconnectUser.pending, (state, _) => {
        return { ...state, isFetching: true };
      })
      .addCase(reconnectUser.rejected, (state, { payload }) => {
        // toast(payload);
        return { ...state, isFetching: false, errorMessage: payload };
      })
      .addCase(reLogInUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isLoggedIn: true,
          isFetching: false,
        };
      })
      .addCase(reLogInUser.pending, (state, _) => {
        return { ...state, isFetching: true };
      })
      .addCase(reLogInUser.rejected, (state, { payload }) => {
        // toast(payload);
        return { ...initialState, errorMessage: payload };
      });
  },
});

export const { resetError, setGoogleAuth } = authSlice.actions;
