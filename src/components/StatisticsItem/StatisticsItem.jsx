import PropTypes from 'prop-types';

import { ListItem, Paragraph, Title } from './StatisticItem.styled';
import { IconContext } from 'react-icons';

export const StatisticsItem = ({ title, total, icon }) => {
  return (
    <ListItem>
      <IconContext.Provider value={{ color: 'green', size: '30px' }}>
        {icon}
      </IconContext.Provider>
      <Title>{total}</Title>
      <Paragraph>{title}</Paragraph>
    </ListItem>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
