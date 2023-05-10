import styled from '@emotion/styled';
import React from 'react';

import { SectionHeading } from './components/section-heading/section-heading';
import { ThreeSectionArticle } from './components/section-heading/three-section-article/three-section-article';
import { SectionLink } from './components/section-link/section-link';
interface Props {
  color: string;
  title: string;
}
const Container = styled.div<{ shadowColor: string }>`
  display: flex;
  flex-direction: column;
  width: 610px;
  background-color: #fff;

  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: ${(props) => props.shadowColor};
`;
const InnerContainer = styled.div`
  padding-left: 31px;
  padding-top: 15px;
  padding-right: 32px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 35px;
  justify-content: space-between;
  align-items: center;
  max-width: 550px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 28px;
  padding-left: 0;
`;
export const SectionThreeNews = ({ color, title }: Props) => {
  return (
    <Container shadowColor={color}>
      <InnerContainer>
        <Header>
          <SectionHeading text={title} />
          <SectionLink text="See all" linkTo={title} />
        </Header>
        <Body>
          <ThreeSectionArticle
            goTo="/"
            date="August 26, 2013"
            comments="14"
            title="For Obama, MLK's shadow looms large ahead of speech"
          />
          <ThreeSectionArticle
            goTo="/"
            date="August 26, 2013"
            comments="22"
            title="NASA releases portrait of a planet waving at Saturn"
          />
          <ThreeSectionArticle
            goTo="/"
            date="August 26, 2013"
            comments="5"
            title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
          />
        </Body>
      </InnerContainer>
    </Container>
  );
};
