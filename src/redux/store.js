import { todoSlice } from './todoSlice';
import { filterSlice } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';




export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    filter: filterSlice.reducer
  },
  
})

