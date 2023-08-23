import { Component } from 'react';


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
    
    this.props.onSubmit(text);
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
        <button type="submit">{this.props.nameButton}</button>
      </form>
    );
  }
}
