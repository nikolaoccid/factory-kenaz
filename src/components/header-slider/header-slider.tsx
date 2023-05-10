import styled from '@emotion/styled';
import React from 'react';
import Slider from 'react-slick';

import articleBgImg from './assets/carousel-bg.png';
const Container = styled.div`
  //display: flex;
  //flex-direction: column;
  width: 940px;
  height: 425px;
`;
const SliderItem = styled.div`
  //display: flex;
  //background-color: brown;
`;
const SliderContainer = styled(Slider)``;
const InnerContainer = styled.div``;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 2,
};
export const HeaderSlider = () => {
  return (
    <Container>
      <InnerContainer>
        <SliderContainer {...settings}>
          <SliderItem>
            <h1>1</h1>
            <img src={articleBgImg} />
          </SliderItem>
          <SliderItem>
            <h1>2</h1>
            <img src={articleBgImg} />
          </SliderItem>
        </SliderContainer>
      </InnerContainer>
    </Container>
  );

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 6,
  // };
  // return (
  //   <Slider {...settings}>
  //     <div>
  //       <h3>1</h3>
  //     </div>
  //     <div>
  //       <h3>2</h3>
  //     </div>
  //     <div>
  //       <h3>3</h3>
  //     </div>
  //     <div>
  //       <h3>4</h3>
  //     </div>
  //     <div>
  //       <h3>5</h3>
  //     </div>
  //     <div>
  //       <h3>6</h3>
  //     </div>
  //   </Slider>
  // );
};
