import PropTypes from 'prop-types';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import { List, Title } from './Statistic.styled';
const iconsArr = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];
export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, title, total }, index) => (
          <StatisticsItem
            key={id}
            title={title}
            total={total}
            icon={iconsArr[index]}
          />
        ))}
      </List>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
