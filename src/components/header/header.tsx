import styled from '@emotion/styled';
import React from 'react';

import { Navbar } from '../navbar/navbar';
import { BackButton } from './components/back-button/back-button';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  background-color: #252525;
`;
const HeadingText = styled.text`
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;
  color: #fff;
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-direction: row;
  //background-color: #252525;
  //padding-left: 330px;
  //padding-right: 330px;
  height: 53px;
  width: 940px;
`;
export const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <LeftContent>
          <BackButton />
          <HeadingText>Kenaz</HeadingText>
        </LeftContent>
        <Navbar />
      </InnerContainer>
    </Container>
  );
};
