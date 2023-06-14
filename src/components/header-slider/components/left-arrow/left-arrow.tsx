import React from 'react';

import leftArrowIcon from '../../assets/left-arrow-icon.png';

export const LeftArrow = ({ onClick }: any) => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }} onClick={onClick}>
      <img
        style={{ display: 'block', position: 'absolute', zIndex: 1, marginTop: '160px', marginLeft: '15px' }}
        src={leftArrowIcon}
      />
    </div>
  );
};
