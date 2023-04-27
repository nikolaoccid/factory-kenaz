import styled from '@emotion/styled';
import React from 'react';

import fb from './assets/Facebook-squared.png';
import twitter from './assets/twitter-squared.png';
import youtube from './assets/Youtube-squared.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Social = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  display: flex;
  align-items: center;
  padding-left: 16px;
  width: 107px;
  height: 40px;
  background-color: #dddddd;

  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  color: #363f48;
`;
const Fans = styled.p`
  display: flex;
  padding-left: 16px;
  align-items: center;
  background-color: #4d4382;
  width: 122px;
  height: 40px;

  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
export const SocialDialog = () => {
  return (
    <Container>
      <Social href="">
        <Image src={fb} />
        <Text>Like</Text>
        <Fans>25041 Fans</Fans>
      </Social>
      <Social href="">
        <Image src={twitter} />
        <Text>Follow</Text>
        <Fans>25041 Followers</Fans>
      </Social>
      <Social href="">
        <Image src={youtube} />
        <Text>Subscribe</Text>
        <Fans>941 Subscribers</Fans>
      </Social>
    </Container>
  );
};