import styled from '@emotion/styled';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { ArticlesWidget } from '../../components/articles-widget/articles-widget';
import { Banner620120 } from '../../components/banner-620-120/banner-620-120';
import { Banner940120 } from '../../components/banner-940-120/banner-940-120';
import { CategoryArticle } from '../../components/category-article/category-article';
import { Divider } from '../../components/divider/divider';
import { DoubleBanner300250 } from '../../components/double-banner-300-250/double-banner-300-250';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { MainNavbar } from '../../components/main-navbar/main-navbar';
import { SocialDialog } from '../../components/social-dialog/social-dialog';
import { CategoryTitle } from './components/category-title/category-title';
import { Pagination } from './components/pagination/pagination';
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
const getCategoryTitle = () => {
  const location = useLocation();
  return location.pathname.substring(1);
};
export const Category = () => {
  return (
    <Container>
      <Header />
      <MainNavbar />
      <Banner940120 />
      <InnerContainer>
        <Body>
          <InnerBody>
            <CategoryTitle text={getCategoryTitle()} />
            <CategoryArticle
              author="Matej Sudar"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
              comments={12}
              date="August 26, 2013"
              bodyText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo."
              linkTo="/"
            />
            <CategoryArticle
              author="Matej Sudar"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
              comments={12}
              date="August 26, 2013"
              bodyText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. "
              linkTo="/"
            />
            <CategoryArticle
              author="Matej Sudar"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
              comments={12}
              date="August 26, 2013"
              bodyText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. "
              linkTo="/"
            />
            <Pagination />
          </InnerBody>
          <Banner620120 />
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
