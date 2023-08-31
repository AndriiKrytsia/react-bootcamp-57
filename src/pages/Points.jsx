import { PointsOptions } from 'components/Points/PointsOptions';
import { Statistics } from 'components/Points/Statistics';
import { Section } from 'components/Section/Section';
import { useState } from 'react';

const Points = () => {
  const [points, setPoints] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
  });

  const leavePoints = (option, value) => {
    setPoints(prevState => ({
      ...prevState,
      [option]: prevState[option] + value,
    }));
  };

  const totalPoints = () => {
    return Object.values(points).reduce((acc, option) => acc + option, 0);
  };

  const total = totalPoints();
  return (
    <>
      <Section title="Leave point">
        <PointsOptions
          options={Object.keys(points)}
          onLeavePoint={leavePoints}
        />
      </Section>

      <Section title="Total points">
        {total > 0 ? (
          <Statistics total={total} options={Object.entries(points)} />
        ) : (
          <p>Not Points</p>
        )}
      </Section>
    </>
  );
};

export default Points;
