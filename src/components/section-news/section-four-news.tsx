import React from 'react';

import { FourSectionArticle } from './components/section-heading/four-section-article/four-section-article';
import { SectionHeading } from './components/section-heading/section-heading';
import { SectionLink } from './components/section-link/section-link';
import { Body, Container, Header, InnerContainer, Row } from './section-news.css';

interface Props {
  color: string;
  title: string;
}

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
              goTo="article"
              date="August 26, 2013"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
            <FourSectionArticle
              goTo="article"
              date="August 26, 2013"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
          </Row>
          <Row>
            <FourSectionArticle
              goTo="article"
              date="August 26, 2013"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
            <FourSectionArticle
              goTo="article"
              date="August 26, 2013"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
            />
          </Row>
        </Body>
      </InnerContainer>
    </Container>
  );
};
