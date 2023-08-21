import { PointsOptions } from 'components/Points/PointsOptions';
import { Statistics } from 'components/Points/Statistics';
import { Section } from 'components/Section/Section';
import { Component } from 'react';
export class Points extends Component {
  state = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  };

  leavePoints = (option, value) => {
    this.setState(prevState => ({
      [option]: prevState[option] + value,
    }));
  };

  totalPoints = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  render() {
    const total = this.totalPoints();
    return (
      <>
        <Section title="Leave point">
          <PointsOptions
            options={Object.keys(this.state)}
            onLeavePoint={this.leavePoints}
          />
        </Section>

        <Section title="Total points">
          {total > 0 ? (
            <Statistics total={total} options={Object.entries(this.state)} />
          ) : (
            <p>Not Points</p>
          )}
        </Section>
      </>
    );
  }
}
