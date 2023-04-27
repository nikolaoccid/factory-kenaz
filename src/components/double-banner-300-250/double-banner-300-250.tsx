import styled from '@emotion/styled';
import React from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  background-color: red;
`;
const AdPlaceholder = styled.div`
  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  height: 128px;
  width: 128px;
`;
export const DoubleBanner300250 = () => {
  return (
    <Container>
      <AdPlaceholder>banner 300x250</AdPlaceholder>
      <AdPlaceholder>banner 300x250</AdPlaceholder>
    </Container>
  );
};
