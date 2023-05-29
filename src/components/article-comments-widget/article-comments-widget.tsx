import styled from '@emotion/styled';
import React, { useState } from 'react';

import { ArticleComment } from './components/article-comment/article-comment';
import { CommentForm } from './components/comment-form/comment-form';

const OuterContainer = styled.div`
  background-color: #eeeeee;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  gap: 10px;
`;
const WidgetHeading = styled.h2`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #363f48;
`;
const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const WidgetSubtext = styled.div`
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #444444;
  padding: 0 23px 10px 0;
`;
export const ArticleCommentsWidget = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'Matt Adams',
      email: '',
      date: 'Jan 2nd, 2012 2:35 pm',
      comment:
        'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
    },
    {
      id: 2,
      name: 'John Toews',
      email: '',
      date: 'Jan 2nd, 2012 2:35 pm',
      comment:
        'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
    },
    {
      id: 3,
      name: 'Andrew Enns',
      email: '',
      date: 'Jan 2nd, 2012 2:35 pm',
      comment:
        'Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.',
    },
  ]);
  const onCommentSubmit = (event: any) => {
    const commentId = 3;
    const commentDate = new Date();
    event.preventDefault();
    setComments([
      ...comments,
      {
        comment: event.target.comment.value,
        date: commentDate.toLocaleString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
        }),
        email: event.target.email.value,
        name: event.target.name.value,
        id: commentId + 1,
      },
    ]);
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.comment.value = '';
  };
  return (
    <OuterContainer>
      <Container>
        <WidgetHeading>Comments</WidgetHeading>
        <CommentsSection>
          {comments.map((comment) => {
            return (
              <ArticleComment key={comment.id} name={comment.name} date={comment.date} comment={comment.comment} />
            );
          })}
        </CommentsSection>
        <WidgetHeading>Add your comment</WidgetHeading>
        <WidgetSubtext>
          Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat
          vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices,
          adipiscing urna.
        </WidgetSubtext>
        <CommentForm onCommentSubmit={onCommentSubmit} />
      </Container>
    </OuterContainer>
  );
};
