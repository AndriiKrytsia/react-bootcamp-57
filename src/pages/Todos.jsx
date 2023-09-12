import { Filter } from 'components/Todos/Filter';
import { Form } from 'components/Form';
import { TodoList } from 'components/Todos/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFilter, selectTodos } from 'redux/todos/selectors';
import { addTodo, fetchTodos } from 'redux/todos/operations';

const Todos = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch(selectFilter);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const hendleSubmit = text => {
    const isExist = todos.find(
      el => el.text.toLocaleLowerCase() === text.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Todo already exist');
      return;
    }
    dispatch(addTodo(text));
  };

  return (
    <div style={{ border: '3px solid red' }}>
      Todos
      <Form onSubmit={hendleSubmit} nameButton="Add Todo" />
      filter your todo
      <Filter />
      <TodoList />
    </div>
  );
};

export default Todos;
