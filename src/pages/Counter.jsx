import { Component } from 'react';

class Counter extends Component {
  state = {
    value: 0,
  };

  //   updateValuePlus = () => {
  //     this.setState(prevState => ({
  //       value: prevState.value + 1,
  //     }));
  //   };
  //   updateValueMinus = () => {
  //     this.setState(prevState => ({
  //       value: prevState.value - 1,
  //     }));
  //   };

  updateValue = value => {
    console.log(value);
    this.setState(prevState => ({
      value: prevState.value + value,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={() => this.updateValue(1)}>+1</button>
        <h2>Value: {this.state.value}</h2>
        <button onClick={() => this.updateValue(-1)}>-1</button>
      </div>
    );
  }
}

export default Counter;
