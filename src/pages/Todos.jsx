import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Filter } from 'components/Todos/Filter';
import { Form } from 'components/Form';
import { TodoList } from 'components/Todos/TodoList';

const LOCALSTORAGE_KEY = 'todos';

const initialState = [
  { id: 1, text: 'todo 1' },
  { id: 2, text: 'todo 2' },
];

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null
        ? defaultValue
        : JSON.parse(serializedState);
    } catch (error) {
      return defaultValue;
    }
  });
  useEffect(() => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }, [key, value]);

  return [value, setValue];
};

const Todos = () => {
  const [todos, setTodos] = useLocalStorage(LOCALSTORAGE_KEY, initialState);

  const [filter, setFilter] = useState('');

  const hendleSubmit = text => {
    const isExist = todos.find(
      el => el.text.toLocaleLowerCase() === text.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Todo already exist');
      return;
    }
    const todo = { id: nanoid(), text };
    setTodos(prevState => [...prevState, todo]);
  };

  const hendleDeleteTodo = idTodo => {
    setTodos(prevState => prevState.filter(({ id }) => id !== idTodo));
  };

  const hendleFilerTodo = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getFilteretTodos = () => {
    const normalazeFilter = filter.toLocaleLowerCase();
    return todos.filter(({ text }) =>
      text.toLocaleLowerCase().includes(normalazeFilter)
    );
  };

  const filteredTodos = getFilteretTodos();
  return (
    <div>
      Todos
      <Form onSubmit={hendleSubmit} nameButton="Add Todo" />
      filter your todo
      <Filter filterTodo={hendleFilerTodo} />
      <TodoList todos={filteredTodos} deleteTodo={hendleDeleteTodo} />
    </div>
  );
};

export default Todos;
