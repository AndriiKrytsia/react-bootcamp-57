import PropTypes from 'prop-types';

export const ForbesListItem = ({ avatar, name, capital }) => {
  return (
    <li>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <div>{capital}</div>
    </li>
  );
};

ForbesListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.number.isRequired,
};
