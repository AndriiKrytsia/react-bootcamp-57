import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Filter } from 'components/Todos/Filter';
import { Form } from 'components/Form';
import { TodoList } from 'components/Todos/TodoList';
import storage from '../helpers/storage';

const LOCALSTORAGE_KEY = 'todos';

export class Todos extends Component {
  state = {
    todos: [
      { id: 1, text: 'todo 1' },
      { id: 2, text: 'todo 2' },
    ],
    filter: '',
  };

  componentDidMount() {
    const todos = storage.load(LOCALSTORAGE_KEY);
    if (todos) {
      this.setState({ todos });
    }
  }
  componentDidUpdate(_, prevState) {
    const { todos } = this.state;
    if (prevState.todos !== todos) {
      storage.save(LOCALSTORAGE_KEY, todos);
    }
  }
  hendleSubmit = text => {
    const isExist = this.state.todos.find(
      el => el.text.toLocaleLowerCase() === text.toLocaleLowerCase()
    );
    if (isExist) {
      alert('Todo already exist');
      return;
    }
    const todo = { id: nanoid(), text };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  hendleDeleteTodo = idTodo => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(({ id }) => id !== idTodo),
    }));
  };

  hendleFilerTodo = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getFilteretTodos = () => {
    const { filter, todos } = this.state;
    const normalazeFilter = filter.toLocaleLowerCase();
    return todos.filter(({ text }) =>
      text.toLocaleLowerCase().includes(normalazeFilter)
    );
  };
  render() {
    const filteredTodos = this.getFilteretTodos();
    return (
      <div>
        Todos
        <Form onSubmit={this.hendleSubmit} nameButton='Add Todo' />
        filter your todo
        <Filter filterTodo={this.hendleFilerTodo} />
        <TodoList todos={filteredTodos} deleteTodo={this.hendleDeleteTodo} />
      </div>
    );
  }
}
