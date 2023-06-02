import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import articleAuthor from '/article-author.png';
import articleImageBody from '/article-book.png';
import articleHero from '/article-hero.png';
import articleMountainImage from '/article-image-mountain.png';
interface Props {
  title: string;
  date: string;
  goTo: string;
  divider?: 'hidden' | 'visible';
}

import { articleNameDashes } from '../../../../../../utils/article-name-dashes';
import articleImage from './assets/article-image.png';
const Container = styled(Link)`
  cursor: grab;
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
      <Container
        to={`${goTo}/${articleNameDashes(title)}`}
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
      >
        <ArticleMetaData>
          <ArticleDate>{date}</ArticleDate>
          <ArticleTitle>{title}</ArticleTitle>
        </ArticleMetaData>
        <ArticleImageTag src={articleImage} />
      </Container>
      <Divider show={divider} />
    </div>
  );
};
