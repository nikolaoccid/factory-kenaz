import React from 'react';

import { SectionHeading } from './components/section-heading/section-heading';
import { ThreeSectionArticle } from './components/section-heading/three-section-article/three-section-article';
import { SectionLink } from './components/section-link/section-link';
import { Body, Container, Header, InnerContainer, Row } from './section-news.css';
interface Props {
  color: string;
  title: string;
}

export const SectionThreeNews = ({ color = '#fff', title = 'Business' }: Props) => {
  return (
    <Container shadowColor={color}>
      <InnerContainer>
        <Header>
          <SectionHeading text={title} />
          <SectionLink text="See all" linkTo={title} />
        </Header>
        <Body>
          <Row>
            <ThreeSectionArticle
              goTo="article"
              date="August 26, 2013"
              comments="14"
              title="For Obama, MLK's shadow looms large ahead of speech"
            />
            <ThreeSectionArticle
              goTo="article"
              date="August 26, 2013"
              comments="22"
              title="NASA releases portrait of a planet waving at Saturn"
            />
            <ThreeSectionArticle
              goTo="article"
              date="August 26, 2013"
              comments="5"
              title="Patriotsvv make cuts ... and Tim Tebow survives (so far)"
            />
          </Row>
        </Body>
      </InnerContainer>
    </Container>
  );
};
