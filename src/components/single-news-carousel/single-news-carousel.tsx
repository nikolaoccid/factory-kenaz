import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import React from 'react';
import Slider from 'react-slick';

import { CarouselArticle } from '../carousel-article/carousel-article';
import { SectionHeading } from '../section-three-news/components/section-heading/section-heading';
import { Header, InnerContainer } from '../section-three-news/section-news.css';
import { NextArrow } from './components/next-arrow/next-arrow';
import { PrevArrow } from './components/prev-arrow/prev-arrow';
interface Props {
  color: string;
  title: string;
}

const Container = styled.div<{ shadowColor: string }>`
  max-width: 47%;
  background-color: #fff;

  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: ${(props) => props.shadowColor};
`;
const Controls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 28px 0;
`;

export const SingleNewsCarousel = ({ color, title }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderRef = React.useRef<Slider>(null);
  return (
    <Container shadowColor={color}>
      <InnerContainer>
        <Header>
          <SectionHeading text={title} />
          <Controls>
            <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
            <NextArrow onClick={() => sliderRef.current?.slickNext()} />
          </Controls>
        </Header>
        <Body>
          <Slider ref={sliderRef} {...settings}>
            <div>
              <CarouselArticle
                goTo="article"
                date="August 26, 2013"
                title="For Obama, MLK's shadow looms large ahead of speech"
              />
            </div>
            <div>
              <CarouselArticle
                goTo="article"
                date="August 26, 2013"
                title="For Obama, MLK's shadow looms large ahead of speech"
              />
            </div>
            <div>
              <CarouselArticle
                goTo="article"
                date="August 26, 2013"
                title="For Obama, MLK's shadow looms large ahead of speech"
              />
            </div>
          </Slider>
        </Body>
      </InnerContainer>
    </Container>
  );
};
