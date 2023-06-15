import React from 'react';

import arrow from '/carousel-article/right.png';

export const NextArrow = ({ onClick }: any) => {
  return (
    <div onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
