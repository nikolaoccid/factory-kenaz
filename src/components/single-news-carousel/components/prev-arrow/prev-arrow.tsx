import React from 'react';

import arrow from '/single-news-carousel/left.png';

export const PrevArrow = ({ onClick }: any) => {
  return (
    <div style={{ cursor: 'pointer' }} onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
