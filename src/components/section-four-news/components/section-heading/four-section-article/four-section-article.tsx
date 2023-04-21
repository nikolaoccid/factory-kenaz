import styled from '@emotion/styled';
import React from 'react';
interface Props {
  title: string;
  date: string;
  goTo: string;
}
import { Link } from 'react-router-dom';

import articleImage from './assets/article-image.png';
const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 15px;
  text-decoration: none;
`;
const ArticleDate = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;
const ArticleTitle = styled.div`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #363f48;
`;
const ArticleMetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 132px;
  gap: 5px;
  padding-top: 4px;
`;
const ArticleImageTag = styled.img`
  width: 120px;
  height: 90px;
`;
export const FourSectionArticle = ({ title, date, goTo }: Props) => {
  return (
    <Container to={goTo}>
      <ArticleImageTag src={articleImage} />
      <ArticleMetaData>
        <ArticleDate>{date}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>{' '}
      </ArticleMetaData>
    </Container>
  );
};
