import styled from '@emotion/styled';
import React from 'react';
interface Props {
  title: string;
  date: string;
  comments: string;
  goTo: string;
}
import { Link } from 'react-router-dom';

import articleImage from './assets/article-image.png';
const Container = styled(Link)`
  cursor: grab;
  display: flex;
  flex-direction: column;
  width: 170px;
  text-decoration: none;
`;
const ArticleDate = styled.div`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;
const ArticleTitle = styled.div`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #363f48;
`;
const ArticleMetaData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 9px;
`;
export const ThreeSectionArticle = ({ title, date, comments, goTo }: Props) => {
  return (
    <Container to={goTo}>
      <img src={articleImage} />
      <ArticleMetaData>
        <ArticleDate>{date}</ArticleDate>
        <ArticleDate>{comments}</ArticleDate>
      </ArticleMetaData>
      <ArticleTitle>{title}</ArticleTitle>
    </Container>
  );
};
