import styled from '@emotion/styled';
import React from 'react';
const OuterContainer = styled.div`
  background-color: #eeeeee;
`;
const Container = styled.div`
  display: flex;
  width: 940px;
  height: 120px;
  background: #fff;
  border: 1px solid #d7d7d7;
  margin: 20px 0;
`;
const TextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
`;
export const Banner940120 = () => {
  return (
    <OuterContainer>
      <Container>
        <TextContainer>banner940x120</TextContainer>
      </Container>
    </OuterContainer>
  );
};
