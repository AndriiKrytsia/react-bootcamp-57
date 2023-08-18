import { ForbesListItem } from 'components/ForbesListItem/ForbesListItem';
import PropTypes from 'prop-types';
import {
  LeaderBoard,
  BoardHeader,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(({ id, name, capital, avatar, isIncrease }) => {
          return (
            <ForbesListItem
              key={id}
              name={name}
              capital={capital}
              avatar={avatar}
              isIncrease={isIncrease}
            />
          );
        })}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

ForbesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};
