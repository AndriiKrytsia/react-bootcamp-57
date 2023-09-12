import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = 'Bearer ' + token;
};

const clearAuthHeader = token => {
  instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { data } = await instance.post('/users/signup', user);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await instance.post('/users/login', user);
    setAuthHeader(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { auth } = thunkAPI.getState();
    if (!auth.token) {
      return thunkAPI.rejectWithValue('NO user');
    }
    setAuthHeader(auth.token);
    try {
      const { data } = await instance.get('/users/me');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await instance.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
