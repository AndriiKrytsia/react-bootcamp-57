import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todos/todoSlice';
import { filterSlice } from './todos/filterSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    filter: filterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// email: 'jghjgj@gmail.com';
// name: 'gfhgfh';
// password: 'asdfghjkl';
