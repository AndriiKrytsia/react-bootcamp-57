import { BlogCard } from 'components/Props/BlogCard/BlogCard';
import { ForbesList } from 'components/Props/ForbesList/ForbesList';
import { Statistics } from 'components/Props/Statistics/Statistics';
import article from 'data/article.json';
import data from 'data/data.json';
import forbes from 'data/forbes.json';

const Props = () => {
  return (
    <>
      <BlogCard {...article} />
      <Statistics title="Main Statistics" stats={data} />
      <ForbesList list={forbes} />
    </>
  );
};

export default Props;
