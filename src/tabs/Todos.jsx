import { nanoid } from 'nanoid';

import { Component } from 'react';

export class Todos extends Component {
  state = {
    todos: [
      { id: 1, text: 'todo 1' },
      { id: 2, text: 'todo 2' },
    ],
    text: '',
  };
  hendleChange = event => {
    this.setState({ text: event.target.value });
  };
  hendleSubmit = event => {
    event.preventDefault();
    const todo = { id: nanoid(), text: this.state.text };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
    this.setState({ text: '' });
  };
  hendleDeleteTodo = idTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(({ id }) => id !== idTodo),
    }));
    console.log(idTodo);
  };
  render() {
    const { todos } = this.state;
    return (
      <div>
        Todos
        <form onSubmit={this.hendleSubmit}>
          <input
            value={this.state.text}
            type="text"
            onChange={this.hendleChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map(({ id, text }) => (
            <li key={id}>
              {text}
              <button
                onClick={() => {
                  this.hendleDeleteTodo(id);
                }}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
