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
  cursor: grab;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  text-decoration: none;
  padding: 30px 33px 24px 33px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 1, 0.2);

  &:hover {
    background-color: #423c70;
  }
`;
const ArticleDate = styled.div`
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #acb3ba;
`;
const ArticleTitle = styled.div`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
`;
const ArticleMetaData = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 75%;
  gap: 5px;
  padding-top: 10px;
`;
const ArticleImageTag = styled.img`
  max-width: 77px;
  max-height: 77px;
  border: 2px solid #ffffff;
`;
export const SideWidgetArticle = ({ title, date, goTo }: Props) => {
  return (
    <Container to={goTo}>
      <ArticleMetaData>
        <ArticleDate>{date}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>{' '}
      </ArticleMetaData>
      <ArticleImageTag src={articleImage} />
    </Container>
  );
};
