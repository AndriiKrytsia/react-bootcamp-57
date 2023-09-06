export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return [...state, action.payload];
    case 'todos/deleteTodo':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'add/filter':
      return action.payload;
    default:
      return state;
  }
};
