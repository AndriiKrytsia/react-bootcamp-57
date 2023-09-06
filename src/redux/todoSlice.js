import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      prepare: text => {
        return { payload: { text, id: nanoid() } };
      },
    },

    deleteTodo(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
