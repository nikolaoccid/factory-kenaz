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
const Title = styled.p`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 29.623px;
  line-height: 52px;
  color: #45b0e3;
`;
const BodyText = styled.p`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
`;
const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
export const SocialMediaDialog = () => {
  return (
    <Container>
      <TitleHeader>
        <img src={arrowImage} />
        <Title>Kenaz</Title>
      </TitleHeader>
      <div>
        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</BodyText>
      </div>

      <SocialMediaIcons>
        <a href="#">
          <img src={rss}></img>
        </a>
        <a href="#">
          <img src={fb}></img>
        </a>
        <a href="#">
          <img src={twitter}></img>
        </a>
        <a href="#">
          <img src={dribble}></img>
        </a>
        <a href="#">
          <img src={youtube}></img>
        </a>
        <a href="#">
          <img src={skype}></img>
        </a>
      </SocialMediaIcons>
    </Container>
  );
};
