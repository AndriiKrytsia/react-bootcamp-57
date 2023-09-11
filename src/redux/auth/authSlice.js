import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './operations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: '', email: '' },
    token: null,
    isLogin: false,
    isRefresh: false,
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
  },
});
