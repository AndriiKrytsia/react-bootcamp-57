import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'redux/selectors';
import { deleteTodo } from 'redux/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getFilteretTodos = () => {
    const normalazeFilter = filter.toLocaleLowerCase();
    return todos.filter(({ text }) =>
      text.toLocaleLowerCase().includes(normalazeFilter)
    );
  };

  const filteredTodos = getFilteretTodos();

  return (
    <ul>
      {filteredTodos.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button onClick={() => dispatch(deleteTodo(id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
