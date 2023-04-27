import styled from '@emotion/styled';
import React from 'react';

import dribble from './assets/dribble-squared.png';
import fb from './assets/Facebook-squared.png';
import arrowImage from './assets/left-arrow-blue.png';
import rss from './assets/Rss-squared.png';
import skype from './assets/Skype-square.png';
import twitter from './assets/twitter-squared.png';
import youtube from './assets/Youtube-squared.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;
const TitleHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 18px;
`;
const TitleImage = styled.img``;
const Title = styled.text`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 29.623px;
  line-height: 52px;
  color: #45b0e3;
`;
const BodyText = styled.text`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
`;
const Body = styled.div`
  width: 303px;
`;
const Icon = styled.img``;
const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const SocialMediaDialog = () => {
  return (
    <Container>
      <TitleHeader>
        <TitleImage src={arrowImage} />
        <Title>Kenaz</Title>
      </TitleHeader>
      <Body>
        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</BodyText>
      </Body>

      <SocialMediaIcons>
        <a href="#">
          <Icon src={rss}></Icon>
        </a>
        <a href="#">
          <Icon src={fb}></Icon>
        </a>
        <a href="#">
          <Icon src={twitter}></Icon>
        </a>
        <a href="#">
          <Icon src={dribble}></Icon>
        </a>
        <a href="#">
          <Icon src={youtube}></Icon>
        </a>
        <a href="#">
          <Icon src={skype}></Icon>
        </a>
      </SocialMediaIcons>
    </Container>
  );
};
