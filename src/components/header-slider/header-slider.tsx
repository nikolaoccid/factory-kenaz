import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import React, { Component } from 'react';
import Slider from 'react-slick';

import articleBgImg from './assets/carousel-bg.png';

const Container = styled(Slider)`
  max-width: 100vw;
  width: 940px;
  //overflow: hidden;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const Slide = styled.div`
  background-color: beige;
`;
export default class HeaderSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Container {...settings}>
        <Slide>
          <h3>1</h3>
          <Image src={articleBgImg} />
        </Slide>
        <Slide>
          <h3>2</h3>
          <Image src={articleBgImg} />
        </Slide>
        <Slide>
          <h3>3</h3>
          <Image src={articleBgImg} />
        </Slide>
        <Slide>
          <h3>4</h3>
          <Image src={articleBgImg} />
        </Slide>
        <Slide>
          <h3>5</h3>
          <Image src={articleBgImg} />
        </Slide>
        <Slide>
          <h3>6</h3>
          <Image src={articleBgImg} />
        </Slide>
      </Container>
    );
  }
}
