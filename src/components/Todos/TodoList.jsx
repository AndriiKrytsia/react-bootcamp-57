export const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button onClick={() => deleteTodo(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
