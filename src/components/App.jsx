import { BlogCard } from "./BlogCard/BlogCard";
import article from "../data/article.json"
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
    </div>
  );
};
