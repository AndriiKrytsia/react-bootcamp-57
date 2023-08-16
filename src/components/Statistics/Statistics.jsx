import PropTypes from 'prop-types';
import { StatisticsItem } from "components/StatisticsItem/StatisticsItem";


export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(({id, title, total}) => (
            <StatisticsItem key={id} title={ title} total ={total} />
        ))}
      </ul>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})).isRequired
};