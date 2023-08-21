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
    this.setState(prevState => ({
      [option]: prevState[option] + value,
    }));
  };

  totalPoints = () => {
    return Object.value(this.state).reduce((acc, option) => acc + option), 0;
  };

  render() {
    const total = this.totalPoints();
    return (
      <>
        <Section title="Leave point">
          <ul>
            {Object.keys(this.state).map(option, index => (
              <li key={option}>
                <button onClick={() => this.leavePoints(option, index + 1)}>
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </Section>
        <Section title="total point">
          <ul>
            {Object.entries(this.state).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
          <p>Total: {total}</p>
        </Section>
      </>
    );
  }
}
