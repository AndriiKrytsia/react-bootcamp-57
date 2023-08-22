import { Component } from 'react';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    text: '',
  };

  hendleChange = event => {
    this.setState({ text: event.target.value });
  };

  hendleSubmit = event => {
    event.preventDefault();
    const { text } = this.state;
    if (!text.trim()) {
      alert('Add Todo');
      return;
    }
    const todo = { id: nanoid(), text };
    this.props.onSubmit(todo);
    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <input
          required
          value={this.state.text}
          type="text"
          onChange={this.hendleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
