import styled from '@emotion/styled';
import React from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  background-color: rgb(220, 220, 220);
  padding: 20px;
`;
const AdPlaceholder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  border: 1px solid #d7d7d7;
  text-align: center;
`;
const AdText = styled.p`
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
  padding: 40px 20px;
`;
export const DoubleBanner300250 = () => {
  return (
    <Container>
      <AdPlaceholder>
        <AdText>banner 300x250</AdText>
      </AdPlaceholder>
      <AdPlaceholder>
        <AdText>banner 300x250</AdText>
      </AdPlaceholder>
    </Container>
  );
};
