import React from 'react';

import arrow from '/double-news-carousel/left-yellow.png';

export const PrevArrow = ({ onClick }: any) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
