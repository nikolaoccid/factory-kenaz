import React from 'react';

import arrow from '../../assets/left.png';

export const PrevArrow = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
