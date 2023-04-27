import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  title: string;
  date: string;
  goTo: string;
  divider?: 'hidden' | 'visible';
}

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
  color: #ccc;
`;
const ArticleMetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 214px;
  gap: 5px;
  padding-top: 4px;
`;
const ArticleImageTag = styled.img`
  background-color: #ffffff;
  padding: 2px 2px;
  width: 120px;
  height: 90px;
`;
const Divider = styled.div<{ show: string }>`
  visibility: ${(props) => props.show};
  height: 1px;
  margin-top: 17px;
  background-color: #666666;
  opacity: 0.2;
`;
export const FeaturedArticle = ({ title, date, goTo, divider = 'visible' }: Props) => {
  return (
    <div>
      <Container to={goTo}>
        <ArticleMetaData>
          <ArticleDate>{date}</ArticleDate>
          <ArticleTitle>{title}</ArticleTitle>{' '}
        </ArticleMetaData>
        <ArticleImageTag src={articleImage} />
      </Container>
      <Divider show={divider} />
    </div>
  );
};
