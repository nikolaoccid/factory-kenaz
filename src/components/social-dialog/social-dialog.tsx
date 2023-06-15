import styled from '@emotion/styled';
import React from 'react';

import fb from '/social-media-dialog/Facebook-squared.png';
import twitter from '/social-media-dialog/twitter-squared.png';
import youtube from '/social-media-dialog/Youtube-squared.png';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
const Social = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  display: flex;
  width: 50%;
  align-items: center;
  padding: 12px 10px 12px 16px;
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
  align-items: center;
  background-color: #4d4382;
  width: 50%;
  padding: 12px 8px 14px 16px;

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
const Title = styled.h2`
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #363f48;
  margin-bottom: 15px;
`;
export const SocialDialog = () => {
  return (
    <Container>
      <Title>Social</Title>
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
