import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import PropTypes from 'prop-types';

export const ForbesList = ({ list }) => {
  return (
    <div>
      <div>
        <div>
          <h2>Forbes</h2>
          <h3>Leader board</h3>
        </div>
      </div>

      <ul>
        {list.map(({ id, name, capital, avatar }) => {
          return (
            <ForbesListItem
              key={id}
              name={name}
              capital={capital}
              avatar={avatar}
            />
          );
        })}
      </ul>
    </div>
  );
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
