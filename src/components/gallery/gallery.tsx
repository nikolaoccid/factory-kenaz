import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import gallery01 from '/gallery01.png';
import gallery02 from '/gallery02.png';
import gallery03 from '/gallery03.png';
import gallery04 from '/gallery04.png';
import gallery05 from '/gallery05.png';
import gallery06 from '/gallery06.png';
import gallery07 from '/gallery07.png';
import gallery08 from '/gallery08.png';

import { LeftArrow } from '../header-slider/components/left-arrow/left-arrow';
import { RightArrow } from '../header-slider/components/right-arrow/right-arrow';
const Container = styled.div`
  //max-width: 100vw;
  width: 940px;
`;
const ThumbnailImage = styled.img`
  width: 120px;
  height: 120px;
  //margin-left: 10px;
`;
const MainGallery = styled(Slider)`
  max-width: 940px;
`;
const NavSlider = styled(Slider)`
  position: relative;
  top: -140px;
  left: 20px;
  width: 1140px;
  .slick-current {
    display: none;
  }
  .slick-track {
    margin: 0;
  }
`;
export const Gallery = () => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);

  const settingsMain = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-nav',
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  const settingsThumbs = {
    dots: false,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  return (
    <Container>
      <>
        <MainGallery {...settingsMain} asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
          <div>
            <img src={gallery01} alt="Gallery image" />
          </div>

          <div>
            <img src={gallery02} alt="Gallery image" />
          </div>
          <div>
            <img src={gallery03} alt="Gallery image" />
          </div>
          <div>
            <img src={gallery04} alt="Gallery image" />
          </div>
          <div>
            <img src={gallery05} alt="Gallery image" />
          </div>
          <div>
            <img src={gallery06} alt="Gallery image" />
          </div>
          <div>
            <img src={gallery07} alt="Gallery image" />
          </div>
          <div>
            <img src={gallery08} alt="Gallery image" />
          </div>
        </MainGallery>
      </>
      <>
        <NavSlider {...settingsThumbs} asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
          <div>
            <ThumbnailImage src={gallery01} alt="Gallery image" />
          </div>

          <div>
            <ThumbnailImage src={gallery02} alt="Gallery image" />
          </div>
          <div>
            <ThumbnailImage src={gallery03} alt="Gallery image" />
          </div>
          <div>
            <ThumbnailImage src={gallery04} alt="Gallery image" />
          </div>
          <div>
            <ThumbnailImage src={gallery05} alt="Gallery image" />
          </div>
          <div>
            <ThumbnailImage src={gallery06} alt="Gallery image" />
          </div>
          <div>
            <ThumbnailImage src={gallery07} alt="Gallery image" />
          </div>
          <div>
            <ThumbnailImage src={gallery08} alt="Gallery image" />
          </div>
        </NavSlider>
      </>
    </Container>
  );
};
