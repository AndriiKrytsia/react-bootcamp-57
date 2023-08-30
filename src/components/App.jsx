import { Route, Routes } from 'react-router-dom';
import { Points, Props, Counter, Todos, Gallery, Home } from 'pages';
import { Header } from './Header/Header';
import { Cocktails } from 'pages/Cocktails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="cocktails" element={<Cocktails />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todos" element={<Todos />} />
        <Route path="props" element={<Props />} />
        <Route path="points" element={<Points />} />
        <Route path="counter" element={<Counter />} />
      </Route>
    </Routes>
  );
};
