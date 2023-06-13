import styled from '@emotion/styled';
import React from 'react';

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
import { getCategoryFromPath } from '../../utils/get-category-from-path';
import { Body, Container, InnerContainer, SideBar } from '../page.css';
import { CategoryTitle } from './components/category-title/category-title';
import { Pagination } from './components/pagination/pagination';

const InnerBody = styled.div`
  background-color: #ffffff;
`;
export const Category = () => {
  return (
    <Container>
      <Header />
      <MainNavbar />
      <Banner940120 />
      <InnerContainer>
        <Body>
          <InnerBody>
            <CategoryTitle text={getCategoryFromPath()} />
            <CategoryArticle
              author="Matej Sudar"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
              comments={12}
              date="August 26, 2013"
              bodyText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo."
              linkTo="/article"
            />
            <CategoryArticle
              author="Matej Sudar"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
              comments={12}
              date="August 26, 2013"
              bodyText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. "
              linkTo="/article"
            />
            <CategoryArticle
              author="Matej Sudar"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
              comments={12}
              date="August 26, 2013"
              bodyText="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo. "
              linkTo="/article"
            />
            <Pagination pages={10} />
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
