import styled from '@emotion/styled';
import React from 'react';
const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CommentForm = ({ onCommentSubmit }: { onCommentSubmit: (event: any) => void }) => {
  return (
    <Container onSubmit={onCommentSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" placeholder="Your email address" required />
      <label htmlFor="comment">Comment</label>
      <textarea name="comment" id="comment" placeholder="Comment" required />
      <input type="submit" value="Submit" />
    </Container>
  );
};
