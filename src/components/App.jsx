import { BlogCard } from "./BlogCard/BlogCard";
import { Statistics } from "./Statistics/Statistics";
import { ForbesList } from "./ForbesList/ForbesList";
import article from "../data/article.json"
import data from "../data/data.json"
import forbes from "../data/forbes.json"

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      React homework template
      <BlogCard {...article} />
      <Statistics title="Main Statistics" stats={data} />
      <ForbesList list={forbes} />

    </div>
  );
};
