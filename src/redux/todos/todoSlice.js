import { createSlice } from '@reduxjs/toolkit';

import { fetchTodos, addTodo, deleteTodo } from './operations';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    isError: "",
  },

  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.isLoading = true
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.isLoading = false
      state.items = action.payload
    },
    [fetchTodos.rejected]: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    }, 

    [addTodo.pending]: (state) => {
      state.isLoading = true
    },
    [addTodo.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false
    },
    [addTodo.rejected]: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    }, 

    [deleteTodo.pending]: (state) => {
      state.isLoading = true
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload.id);
      state.isLoading = false
    },
    [deleteTodo.rejected]: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },
  }
});


