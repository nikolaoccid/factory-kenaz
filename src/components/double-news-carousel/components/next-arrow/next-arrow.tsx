import React from 'react';

import arrow from '/double-news-carousel/right-yellow.png';

export const NextArrow = ({ onClick }: any) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
