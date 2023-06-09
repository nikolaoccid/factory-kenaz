import styled from '@emotion/styled';
import React from 'react';
interface Props {
  title: string;
  date: string;
  goTo: string;
}

import { Link } from 'react-router-dom';

import articleAuthor from '/article-author.png';
import articleImageBody from '/article-book.png';
import articleHero from '/article-hero.png';
import articleImage from '/article-image-mountain.png';

import { articleNameDashes } from '../../../../../utils/article-name-dashes';
import { ArticleDate, ArticleTitle } from '../section-article.css';
const Container = styled(Link)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 15px;
  text-decoration: none;
`;
const ArticleMetaData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 4px;
`;
const ArticleImageTag = styled.img`
  width: 45%;
`;
export const FourSectionArticle = ({ title, date, goTo }: Props) => {
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
      <ArticleImageTag src={articleImage} />
      <ArticleMetaData>
        <ArticleDate>{date}</ArticleDate>
        <ArticleTitle>{title}</ArticleTitle>
      </ArticleMetaData>
    </Container>
  );
};
