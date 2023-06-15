import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import articleAuthor from '/article-author.png';
import articleImageBody from '/article-book.png';
import articleHero from '/article-hero.png';
import articleMountainImage from '/article-mountain-large.png';
import commentIcon from '/comment.png';

import { articleNameDashes } from '../../utils/article-name-dashes';
import { LeftArrow } from './components/left-arrow/left-arrow';
import { RightArrow } from './components/right-arrow/right-arrow';
const Container = styled(Slider)`
  max-width: 100vw;
  width: 940px;
  margin-bottom: 20px;
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
            <CtaButton
              to={`/article/${articleNameDashes('Palestinians call off peace talks after clash')}`}
              state={{
                title: 'Palestinians call off peace talks after clash',
                date: 'May 26th, 2023',
                category: 'news',
                bodyImage: articleImageBody,
                heroImage: articleHero,
                firstParagraph:
                  'Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.',
                secondParagraph:
                  'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue.',
                authorImage: articleAuthor,
                authorDescription:
                  'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.',
              }}
            >
              Read more
            </CtaButton>
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
            <CtaButton
              to={`/article/${articleNameDashes("'Margot' breathlessly reimagines Anne Frank's sister")}`}
              state={{
                title: "'Margot' breathlessly reimagines Anne Frank's sister",
                date: 'May 26th, 2023',
                category: 'news',
                bodyImage: articleImageBody,
                heroImage: articleHero,
                firstParagraph:
                  'Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.',
                secondParagraph:
                  'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue.',
                authorImage: articleAuthor,
                authorDescription:
                  'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.',
              }}
            >
              Read more
            </CtaButton>
          </HeroText>
        </Slide>
      </Slider>
    </Container>
  );
};
