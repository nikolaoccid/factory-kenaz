import styled from '@emotion/styled';
import React from 'react';
interface Props {
  title: string;
  date: string;
  goTo: string;
  comments: number;
}
import { Link } from 'react-router-dom';

import articleAuthor from '/article-author.png';
import articleImageBody from '/article-book.png';
import articleHero from '/article-hero.png';
import articleImage from '/article-image-mountain.png';

import { articleNameDashes } from '../../../../utils/article-name-dashes';
import commentIcon from './assets/comment.png';
const Container = styled(Link)`
  cursor: pointer;
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
  padding-top: 12px;
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
`;
const ArticleImageTag = styled.img`
  max-width: 77px;
  max-height: 77px;
  border: 2px solid #ffffff;
`;
const CommentsCounter = styled.p`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #acb3ba;
  padding-top: 4px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;
const Comments = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  justify-content: right;
`;
export const SideWidgetArticle = ({ title, date, goTo, comments }: Props) => {
  return (
    <Container
      to={`${goTo}/${articleNameDashes(title)}`}
      state={{
        title: title,
        date: date,
        category: 'sport',
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
    >
      <ArticleMetaData>
        <Row>
          <ArticleDate>{date}</ArticleDate>
          <Comments>
            <div>
              <img src={commentIcon} />
            </div>
            <CommentsCounter>{comments}</CommentsCounter>
          </Comments>
        </Row>

        <ArticleTitle>{title}</ArticleTitle>
      </ArticleMetaData>

      <ArticleImageTag src={articleImage} />
    </Container>
  );
};
