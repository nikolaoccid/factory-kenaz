import styled from '@emotion/styled';
import React from 'react';

import { FourSectionArticle } from './components/section-heading/four-section-article/four-section-article';
import { SectionHeading } from './components/section-heading/section-heading';
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
  flex-direction: column;
  gap: 15px;
  padding: 28px;
  padding-left: 0;
`;
const Row = styled.div`
  display: flex;
  gap: 15px;
`;
export const SectionFourNews = ({ color, title }: Props) => {
  return (
    <Container shadowColor={color}>
      <InnerContainer>
        <Header>
          <SectionHeading text={title} />
          <SectionLink text="See all" linkTo={title} />
        </Header>
        <Body>
          <Row>
            <FourSectionArticle
              goTo="/"
              date="August 26, 2013"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
            <FourSectionArticle
              goTo="/"
              date="August 26, 2013"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
          </Row>
          <Row>
            <FourSectionArticle
              goTo="/"
              date="August 26, 2013"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
            <FourSectionArticle
              goTo="/"
              date="August 26, 2013"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
            />
          </Row>
        </Body>
      </InnerContainer>
    </Container>
  );
};
