import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://goit-task-manager.herokuapp.com/',
});

const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = 'Bearer ' + token;
};

const cleareAuthHeader = token => {
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
