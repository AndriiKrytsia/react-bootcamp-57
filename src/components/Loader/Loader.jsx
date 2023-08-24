import { OverLay } from 'components/OverLay/OverLay';
import { RingLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <OverLay>
      <RingLoader color="#36d7b7" />
    </OverLay>
  );
};
