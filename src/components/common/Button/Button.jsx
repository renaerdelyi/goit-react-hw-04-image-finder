import React from 'react';

const Button = ({ action }) => {
  return (
    <button className="button" onClick={action}>
      Load more
    </button>
  );
};

export default Button;