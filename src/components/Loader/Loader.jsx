import { Circles } from 'react-loader-spinner';
import { Loader } from './Loader.style';

export const LoaderSpinner = () => {
  return (
    <Loader>
      <Circles color="#4A56E2" height={200} width={200} />
    </Loader>
  );
};
