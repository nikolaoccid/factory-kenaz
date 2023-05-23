import styled from '@emotion/styled';
import React from 'react';

import anonUser from '/anon-user.png';
interface Props {
  name: string;
  date: string;
  comment: string;
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-right: 15px;
`;
const Comment = styled.div`
  display: flex;
  flex-direction: column;
`;
const CommentDetails = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Name = styled.div`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #4d4382;
`;
const Date = styled.div`
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 20px;
  color: #666666;
`;
const CommentBody = styled.div`
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #444444;
`;

export const ArticleComment = ({ name, date, comment }: Props) => {
  return (
    <Container>
      <img src={anonUser} />
      <Comment>
        <CommentDetails>
          <Name>{name}</Name>
          <Date>{date}</Date>
        </CommentDetails>
        <CommentBody>{comment}</CommentBody>
      </Comment>
    </Container>
  );
};
