import React from 'react';

import arrow from './../../assets/right-yellow.png';

export const NextArrow = ({ onClick }: any) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
