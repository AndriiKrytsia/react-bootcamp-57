import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filterReducer, todosReducer } from './reducer';
import { todoSlice } from './todoSlice';

export const rootReducer = combineReducers({
  todos: todoSlice.reducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
