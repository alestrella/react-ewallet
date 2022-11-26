import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from './token';
import toast from 'react-hot-toast';

// axios baseUrl initializes in the index.js

// endpoint addresses
const AUTH_ENDPOINTS = {
  logIn: '/auth/login',
  logOut: '/auth/logout',
  register: '/auth/signup',
  getUser: '/users/current',
};

export const logInUser = createAsyncThunk(
  'auth/logIn',
  async (userCredentials, thunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINTS.logIn, userCredentials);

      token.set(data.token);
      toast.success(`Welcome ${data.user.username}!`);
      return {
        email: data.user.email,
        username: data.user.username,
        token: data.accessToken,
      };
    } catch (err) {
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue('Incorrect name or password');
        case 404:
          return thunkAPI.rejectWithValue('No user with this name');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with server');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(AUTH_ENDPOINTS.logOut);
      token.unset();
      return data;
    } catch (err) {
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue('Unauthorized user');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with server');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userCredentials, thunkAPI) => {
    try {
      const { data } = await axios.post(
        AUTH_ENDPOINTS.register,
        userCredentials
      );
      toast.success(`Welcome ${data.user.username}!`);
      return {
        email: data.user.email,
        username: data.user.username,
        token: data.accessToken,
      };
    } catch (err) {
      switch (err.response.status) {
        case 409:
          return thunkAPI.rejectWithValue('This user name is already in use');
        case 400:
          return thunkAPI.rejectWithValue('Bad request. Try another one');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with server');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);

export const reconnectUser = createAsyncThunk(
  'auth/reconnect',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (persistedToken === null) return thunkAPI.rejectWithValue();
    token.set(persistedToken);
    try {
      const { data } = await axios.get(AUTH_ENDPOINTS.getUser);
      return data;
    } catch (err) {
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue('Your token has expired');
        case 500:
          return thunkAPI.rejectWithValue('Something is wrong with server');
        default:
          return thunkAPI.rejectWithValue(
            'Uknown error code ' + err.response.status
          );
      }
    }
  }
);
