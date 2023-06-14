import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import React from 'react';
import Slider from 'react-slick';

import { CarouselArticle } from '../carousel-article/carousel-article';
import { SectionHeading } from '../section-news/components/section-heading/section-heading';
import { Body } from '../section-news/section-news.css';
import { NextArrow } from './components/next-arrow/next-arrow';
import { PrevArrow } from './components/prev-arrow/prev-arrow';
interface Props {
  color: string;
  title: string;
}

const Container = styled.div<{ shadowColor: string }>`
  max-width: 100%;
  background-color: #fff;

  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: ${(props) => props.shadowColor};
`;
const InnerContainer = styled.div`
  padding-top: 15px;
  padding-right: 32px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding-left: 31px;
  justify-content: space-between;
  align-items: center;
`;
const Controls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const DoubleNewsCarousel = ({ color, title }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
                mode="double"
              />
            </div>
            <div>
              <CarouselArticle
                mode="double"
                goTo="article"
                date="August 26, 2013"
                title="For Obama, MLK's shadow looms large ahead of speech"
              />
            </div>
            <div>
              <CarouselArticle
                mode="double"
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
