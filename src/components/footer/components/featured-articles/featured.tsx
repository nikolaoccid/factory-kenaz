import styled from '@emotion/styled';
import React from 'react';
export interface Props {
  title: string;
}
import { FeaturedArticle } from './components/featured-article/featured-article';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Title = styled.p`
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;
export const Featured = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <FeaturedArticle title="Palestinians call off peace talks after clash" date="August 26, 2013" goTo="/article" />
      <FeaturedArticle title="Palestinians call off peace talks after clash" date="August 26, 2013" goTo="/article" />
      <FeaturedArticle
        title="Palestinians call off peace talks after clash"
        date="August 26, 2013"
        goTo="/article"
        divider="hidden"
      />
    </Container>
  );
};
