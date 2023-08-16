import PropTypes from 'prop-types';

export const StatisticsItem = ({ title, total }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{total}</p>
    </li>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};