import { BackDrop } from './OverLay.style';

export const OverLay = ({ children, onClick }) => {
  return <BackDrop onClick={onClick}> {children} </BackDrop>;
};
