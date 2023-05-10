import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import articleImg from './assets/article-image.png';
import calendarImg from './assets/calendar.png';
import { ArticleCtaButton } from './components/article-cta-button/article-cta-button';
interface Props {
  title: string;
  date: string;
  author: string;
  comments: number;
  bodyText: string;
  linkTo: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0 50px 30px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgb(215, 215, 215);
`;
const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
const Title = styled(Link)`
  cursor: grab;
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #363f48;
  max-width: 85%;
  text-decoration: none;
`;
const MetadataSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 35px;
`;
const Metadata = styled.text`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #666666;
`;
const DateSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const ArticleBodySection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const BodyText = styled.div`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #444444;
  max-width: 384px;
  padding-bottom: 15px;
`;
const ArticleImage = styled.img`
  padding-top: 5px;
  width: auto;
  height: auto;
  max-width: 170px;
  max-height: 128px;
`;
const BodyTextContainer = styled.div``;
export const CategoryArticle = ({ author, comments, date, title, bodyText, linkTo }: Props) => {
  return (
    <Container>
      <TitleSection>
        <Title to={linkTo}>{title}</Title>
        <MetadataSection>
          <DateSection>
            <img src={calendarImg} />
            <Metadata>{date}</Metadata>
          </DateSection>
          <Metadata>Author: {author}</Metadata>
          <Metadata> {comments} Comments</Metadata>
        </MetadataSection>
      </TitleSection>
      <ArticleBodySection>
        <ArticleImage src={articleImg} />
        <BodyTextContainer>
          <BodyText>{bodyText}</BodyText>
          <ArticleCtaButton text="Read article" linkTo={linkTo} />
        </BodyTextContainer>
      </ArticleBodySection>
    </Container>
  );
};
