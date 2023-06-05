import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import heroImage from '/article-hero.png';
import commentIcon from '/comment.png';

import articleMountainImage from './assets/carousel-bg.png';
import { LeftArrow } from './components/left-arrow/left-arrow';
import { RightArrow } from './components/right-arrow/right-arrow';
const Container = styled(Slider)`
  max-width: 100vw;
  width: 940px;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 10px;
  height: 10px;
`;

const DateText = styled.p`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #eef6fa;
`;
const CommentText = styled.p`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #eef6fa;
`;
const TitleText = styled.p`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: #eef6fa;
  width: 65%;

  padding-top: 10px;
  padding-bottom: 15px;
`;
const Slide = styled.div`
  position: relative;
`;
const HeroText = styled.div`
  max-width: 940px;
  margin-top: -200px;
  padding-bottom: 35px;
  position: relative;
  padding-left: 30px;
`;
const MetaData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;
const CommentMetaData = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const CtaButton = styled(Link)`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #eef6fa;
  border: 1px solid #ffffff;
  padding: 6px 23px;
  text-decoration: none;
`;
export const HeaderSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };
  return (
    <Container>
      <Slider {...settings}>
        <Slide>
          <img src={articleMountainImage} />
          <HeroText>
            <MetaData>
              <DateText>26th May 2023</DateText>
              <CommentMetaData>
                <img src={commentIcon} />
                <CommentText>22 Comments</CommentText>
              </CommentMetaData>
            </MetaData>
            <TitleText>Palestinians call off peace talks after clash</TitleText>
            <CtaButton to="">Read more</CtaButton>
          </HeroText>
        </Slide>

        <Slide>
          <img src={articleMountainImage} />
          <HeroText>
            <MetaData>
              <DateText>26th May 2023</DateText>
              <CommentMetaData>
                <img src={commentIcon} />
                <CommentText>22 Comments</CommentText>
              </CommentMetaData>
            </MetaData>
            <TitleText>&apos;Margot&apos; breathlessly reimagines Anne Frank&apos;s sister</TitleText>
            <CtaButton to="">Read more</CtaButton>
          </HeroText>
        </Slide>
      </Slider>
    </Container>
  );
};
