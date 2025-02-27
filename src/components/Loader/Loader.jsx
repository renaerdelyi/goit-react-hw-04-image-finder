import React from 'react';
import { Puff } from 'react-loader-spinner';

const LoaderSpinner = () => (
    <div className="loader">
      <Puff type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );

export default LoaderSpinner;