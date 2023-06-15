import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import ReactFsLightbox from 'fslightbox-react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const FsLightbox = (ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox) as typeof ReactFsLightbox;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import magnifier from '/magnifier.png';
const images = [
  { id: 1, src: '/gallery/gallery01.png' },
  { id: 2, src: '/gallery/gallery02.png' },
  { id: 3, src: '/gallery/gallery03.png' },
  { id: 4, src: '/gallery/gallery04.png' },
  { id: 5, src: '/gallery/gallery05.png' },
  { id: 6, src: '/gallery/gallery06.png' },
  { id: 7, src: '/gallery/gallery07.png' },
];

import { LeftArrow } from '../header-slider/components/left-arrow/left-arrow';
import { RightArrow } from '../header-slider/components/right-arrow/right-arrow';
const Container = styled.div`
  position: relative;
  width: 940px;
  height: 400px;
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
  left: 10px;
`;
const ToggleButton = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0;
  background: transparent;
`;
const FullScreenContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 46%;
`;
export const Gallery = () => {
  const [nav1, setNav1] = useState<any>(null);
  const [nav2, setNav2] = useState<any>(null);
  const [slider1, setSlider1] = useState<any>(null);
  const [slider2, setSlider2] = useState<any>(null);
  const [toggler, setToggler] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '15px',
  };
  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [setNav1, setNav2, slider1, slider2]);
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
            <div key={image.id}>
              <img src={image.src} alt="Gallery image" />
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
            <div key={image.id}>
              <ThumbnailImage src={image.src} alt="Gallery image" />
            </div>
          ))}
        </NavSlider>
        <FullScreenContainer>
          <ToggleButton onClick={() => setToggler(!toggler)}>
            <img src={magnifier} alt="Slider full screen icon" />
          </ToggleButton>
          <FsLightbox toggler={toggler} sources={[`/gallery/gallery0${currentSlide + 1}.png`]} />
        </FullScreenContainer>
      </>
    </Container>
  );
};
