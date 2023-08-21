import { Component } from 'react';
export class Points extends Component {
  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  leavePoints = option => {
    console.log(option);
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    return (
      <>
        <h2>Leave point</h2>
        <ul>
          {Object.keys(this.state).map(option => (
            <li key={option}>
              <button onClick={() => this.leavePoints(option)}>{option}</button>
            </li>
          ))}
        </ul>
        <h2>Total points</h2>
        <ul>
          {Object.entries(this.state).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
