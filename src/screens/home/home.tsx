import styled from '@emotion/styled';
import React from 'react';

import { Banner620120 } from '../../components/banner-620-120/banner-620-120';
import { Banner940120 } from '../../components/banner-940-120/banner-940-120';
import { Divider } from '../../components/divider/divider';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { SectionFourNews } from '../../components/section-four-news/section-four-news';
import { SectionThreeNews } from '../../components/section-three-news/section-three-news';
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #eeeeee;
  justify-content: center;
  align-items: center;
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
  background-color: dimgray;
  width: 318px;
`;
export const Home = () => {
  return (
    <Container>
      <Header />
      <MainNavbar />
      <Banner940120 />
      <InnerContainer>
        <Body>
          <SectionThreeNews color="#299ec3" title="News" />
          <SectionThreeNews color="#84C14F" title="Sport" />
          <Banner620120 />
          <SectionFourNews color="#EE6151" title="Business" />
          <Banner620120 />
        </Body>
        <SideBar>Side bar section</SideBar>
      </InnerContainer>
      <Divider />
      <Footer />
    </Container>
  );
};
