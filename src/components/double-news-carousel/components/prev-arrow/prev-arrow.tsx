import React from 'react';

import arrow from './../../assets/left-yellow.png';

export const PrevArrow = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
