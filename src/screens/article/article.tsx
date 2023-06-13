import styled from '@emotion/styled';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';

import { ArticleCommentsWidget } from '../../components/article-comments-widget/article-comments-widget';
import { ArticlesWidget } from '../../components/articles-widget/articles-widget';
import { AuthorWidget } from '../../components/author-widget/author-widget';
import { Banner620120 } from '../../components/banner-620-120/banner-620-120';
import { Banner940120 } from '../../components/banner-940-120/banner-940-120';
import { Divider } from '../../components/divider/divider';
import { DoubleBanner300250 } from '../../components/double-banner-300-250/double-banner-300-250';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { SocialDialog } from '../../components/social-dialog/social-dialog';
import { Body, Container, InnerContainer, SideBar } from '../page.css';
const InnerBody = styled.div`
  background-color: #ffffff;
`;
const BodyParagraph = styled.p`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #444444;
  padding: 37px 20px 42px 30px;
`;
const HeroText = styled.div`
  max-width: 940px;
  margin-top: -200px;
  padding-bottom: 35px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.75),
    rgba(255, 255, 255, 1)
  );
`;
const DateText = styled.p`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #222222;
  padding-bottom: 50px;
  width: 85%;
  padding-left: 30px;
`;
const TitleText = styled.p`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 53px;
  color: #222222;
  width: 85%;
  padding-left: 30px;
`;
const SliderBody = styled.div`
  position: relative;
`;
export const Article = () => {
  const { state } = useLocation();
  if (!state) {
    return null;
  }

  return (
    <Container>
      <Header />
      <MainNavbar />
      <Banner940120 />
      <div>
        <Slider>
          <SliderBody>
            <img src={state.heroImage} />
            <HeroText>
              <DateText>{state.date}</DateText>
              <TitleText>{state.title}</TitleText>
            </HeroText>
          </SliderBody>
        </Slider>
      </div>
      <InnerContainer>
        <Body>
          <InnerBody>
            <BodyParagraph>{state.firstParagraph}</BodyParagraph>
            <img src={state.bodyImage} alt="Article body image" />
            <BodyParagraph>{state.secondParagraph}</BodyParagraph>
          </InnerBody>
          <Banner620120 />
          <AuthorWidget authorImage={state.authorImage} authorDescription={state.authorDescription} />
          <ArticleCommentsWidget />
        </Body>
        <SideBar>
          <ArticlesWidget />
          <SocialDialog />
          <DoubleBanner300250 />
        </SideBar>
      </InnerContainer>
      <Divider />
      <Footer />
    </Container>
  );
};
