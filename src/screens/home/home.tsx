import styled from '@emotion/styled';
import React from 'react';

import { ArticlesWidget } from '../../components/articles-widget/articles-widget';
import { Banner620120 } from '../../components/banner-620-120/banner-620-120';
import { Banner940120 } from '../../components/banner-940-120/banner-940-120';
import { Divider } from '../../components/divider/divider';
import { DoubleBanner300250 } from '../../components/double-banner-300-250/double-banner-300-250';
import { DoubleNewsCarousel } from '../../components/double-news-carousel/double-news-carousel';
import { Footer } from '../../components/footer/footer';
import { Gallery } from '../../components/gallery/gallery';
import { Header } from '../../components/header/header';
import { HeaderSlider } from '../../components/header-slider/header-slider';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { SectionFourNews } from '../../components/section-four-news/section-four-news';
import { SectionThreeNews } from '../../components/section-three-news/section-three-news';
import { SingleNewsCarousel } from '../../components/single-news-carousel/single-news-carousel';
import { SocialDialog } from '../../components/social-dialog/social-dialog';
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #eeeeee;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
  width: 940px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(237, 237, 237);
  width: 622px;
  gap: 17px;
`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 318px;
  gap: 25px;
`;
const RowContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
`;
export const Home = () => {
  return (
    <Container>
      <Header />
      <MainNavbar />
      <Banner940120 />
      <HeaderSlider />
      <InnerContainer>
        <Body>
          <SectionThreeNews color="#299ec3" title="news" />
          <SectionThreeNews color="#84C14F" title="sport" />
          <Banner620120 />
          <SectionFourNews color="#EE6151" title="business" />
          <Banner620120 />
          <DoubleNewsCarousel color="#FCC44D" title="News Carousel" />
          <RowContent>
            <SingleNewsCarousel color="#A99765" title="Editorial" />
            <SingleNewsCarousel color="#A99765" title="Local news" />
          </RowContent>
        </Body>
        <SideBar>
          <ArticlesWidget />
          <SocialDialog />
          <DoubleBanner300250 />
        </SideBar>
      </InnerContainer>
      <Banner940120 />
      {/*<Gallery />*/}
      <Divider />
      <Footer />
    </Container>
  );
};
