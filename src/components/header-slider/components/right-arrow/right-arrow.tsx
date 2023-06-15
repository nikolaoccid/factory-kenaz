import React from 'react';

import rightArrowIcon from '/header-slider/right-arrow-icon.png';
export const RightArrow = ({ onClick }: any) => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={onClick}>
      <img
        style={{
          display: 'block',
          float: 'right',
          marginTop: '-240px',
          marginRight: '15px',
        }}
        src={rightArrowIcon}
      />
    </div>
  );
};
