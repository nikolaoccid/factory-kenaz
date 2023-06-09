import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import FsLightbox from 'fslightbox-react';
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
import magnifier from '/magnifier.png';
const images: string[] = [gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08];
import { LeftArrow } from '../header-slider/components/left-arrow/left-arrow';
import { RightArrow } from '../header-slider/components/right-arrow/right-arrow';
const Container = styled.div`
  width: 940px;
`;
const ThumbnailImage = styled.img`
  width: 120px;
  height: 120px;
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
const ToggleButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0;
  background: transparent;
`;
const FullScreenContainer = styled.div`
  //position: relative;
`;
const TogglerImg = styled.img`
  //position: absolute;
`;
export const Gallery = () => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);
  const [toggler, setToggler] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  console.log('currentSlide', currentSlide);
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
        <MainGallery
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
          afterChange={setCurrentSlide}
        >
          {images.map((image) => (
            <div key={image}>
              <TogglerImg src={image} alt="Gallery image" />
            </div>
          ))}
        </MainGallery>
      </>
      <>
        <NavSlider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          afterChange={setCurrentSlide}
        >
          {images.map((image) => (
            <div key={image}>
              <ThumbnailImage src={image} alt="Gallery image" />
            </div>
          ))}
        </NavSlider>
        <FullScreenContainer>
          <ToggleButton onClick={() => setToggler(!toggler)}>
            <img src={magnifier} alt="Slider full screen icon" />
          </ToggleButton>
          <FsLightbox toggler={toggler} sources={[`/gallery0${currentSlide + 1}.png`, ...images]} />
        </FullScreenContainer>
      </>
    </Container>
  );
};
