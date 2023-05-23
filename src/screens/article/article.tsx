import styled from '@emotion/styled';
import React from 'react';
import { useLocation } from 'react-router-dom';

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
      <InnerContainer>
        <Body>
          <InnerBody>
            <div>
              TODO: <h2>{state.title}</h2>
            </div>
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
