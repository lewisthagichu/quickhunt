'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#9acd32"
      loading={loading}
      cssOverride={override}
      size={75}
      aria-label="Loading Spinner"
    />
  );
};
export default Spinner;
