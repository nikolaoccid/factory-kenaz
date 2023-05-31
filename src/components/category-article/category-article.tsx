import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import articleAuthor from '/article-author.png';
import articleImageBody from '/article-book.png';
import articleHero from '/article-hero.png';
import articleImage from '/article-image-mountain.png';

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
const Metadata = styled.div`
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
          <ArticleCtaButton
            text="Read article"
            linkTo={linkTo}
            state={{
              title: title,
              date: date,
              bodyImage: articleImageBody,
              heroImage: articleHero,
              firstParagraph:
                'Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis. Donec sed odio dui. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo.',
              secondParagraph:
                'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue.',
              authorImage: articleAuthor,
              authorDescription:
                'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem.',
            }}
          />
        </BodyTextContainer>
      </ArticleBodySection>
    </Container>
  );
};
