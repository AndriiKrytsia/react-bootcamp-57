import PropTypes from 'prop-types';
import { Card, CardHeader, CardPoster } from './BlogCard.styled';

export const BlogCard = ({
  name,
  postedAt,
  poster,
  tag,
  title,
  description,
  avatar,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt={tag} />
      </CardHeader>
      <div>
        <h2>{tag}</h2>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <div>
        <div>
          <img src={avatar} alt={name} />
          <div>
            <p>{name}</p>
            <p>{postedAt}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

BlogCard.propTypes = {
  name: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
