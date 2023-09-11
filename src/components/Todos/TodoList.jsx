import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from 'redux/todos/operations';
import { selectFilter, selectTodos } from 'redux/todos/selectors';

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
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {filteredTodos.map(({ id, text }) => (
        <li key={id} style={{ width: 150 }}>
          <p>{text}</p>
          <button
            style={{ background: 'red' }}
            onClick={() => dispatch(deleteTodo(id))}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
