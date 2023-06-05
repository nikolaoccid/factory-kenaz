import React from 'react';

import rightArrowIcon from '../../assets/right-arrow-icon.png';
export const RightArrow = ({ onClick }: any) => {
  return (
    <div style={{ position: 'relative' }} onClick={onClick}>
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
