import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
      prepare: text => {
        return { payload: { text, id: nanoid() } };
      },
    },

    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
