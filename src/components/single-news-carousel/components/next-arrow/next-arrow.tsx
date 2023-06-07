import React from 'react';

import arrow from '../../assets/right.png';

export const NextArrow = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
