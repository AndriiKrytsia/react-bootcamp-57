import { Form } from 'components/Form';
import { Component } from 'react';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return <Form onSubmit={this.handleSubmit} nameButton="Search" />;
  }
}
