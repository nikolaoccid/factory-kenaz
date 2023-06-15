import React from 'react';

import arrow from '/single-news-carousel/right.png';

export const NextArrow = ({ onClick }: any) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
