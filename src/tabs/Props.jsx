import { BlogCard } from 'components/BlogCard/BlogCard';
import { ForbesList } from 'components/ForbesList/ForbesList';
import { Statistics } from 'components/Statistics/Statistics';
import article from 'data/article.json';
import data from 'data/data.json';
import forbes from 'data/forbes.json';

export const Props = () => {
  return (
    <>
      <BlogCard {...article} />
      <Statistics title="Main Statistics" stats={data} />
      <ForbesList list={forbes} />
    </>
  );
};
