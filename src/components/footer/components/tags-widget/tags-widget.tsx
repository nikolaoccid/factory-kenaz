import styled from '@emotion/styled';
import React from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  padding-top: 10px;
`;
const Title = styled.text`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cccccc;
`;
const TagsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const TagRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
const Tag = styled.a`
  background-color: #333333;
  padding: 3px 9px;

  text-decoration: none;
  font-family: 'Varela', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #666666;
`;
const TagActive = styled.a`
  background-color: #4d4382;
  padding: 3px 7px;

  text-decoration: none;
  font-family: 'Varela', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #cccccc;
`;
export const TagsWidget = () => {
  return (
    <Container>
      <Title>Tags Widget</Title>
      <TagsGroup>
        <TagRow>
          <Tag href="">assueverit</Tag>
          <Tag href="">utroquoe</Tag>
          <Tag href="">probo</Tag>
          <Tag href="">assuev</Tag>
        </TagRow>
        <TagRow>
          <Tag href="">probo</Tag>
          <Tag href="">assueverit</Tag>
          <Tag href="">titl</Tag>
          <TagActive href="">assueverit</TagActive>
        </TagRow>
        <TagRow>
          <Tag href="">assueverit</Tag>
          <Tag href="">utroque</Tag>
          <Tag href="">probo</Tag>
          <Tag href="">assueverit</Tag>
        </TagRow>
        <TagRow>
          <Tag href="">utroque</Tag>
        </TagRow>
      </TagsGroup>
    </Container>
  );
};
