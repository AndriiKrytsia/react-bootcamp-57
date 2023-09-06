import { todoSlice } from './todoSlice';
import { filterSlice } from './filterSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const pesistConfig = {
  key: 'todos',
  storage,
};

const persistedReducer = persistReducer(pesistConfig, todoSlice.reducer)

export const store = configureStore({
  reducer: {
    todos: persistedReducer,
    filter: filterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)