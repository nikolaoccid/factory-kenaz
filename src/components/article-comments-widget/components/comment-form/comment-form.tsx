import styled from '@emotion/styled';
import React from 'react';
const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const InputField = styled.input`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #666666;

  background-color: #dddddd;
  padding: 11px 11px;
  border: 0;
  width: 45%;
`;
const TextArea = styled.textarea`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #666666;

  background-color: #dddddd;
  padding: 11px 11px;
  border: 0;
`;
const SubmitButton = styled.input`
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
  background-color: #4d4382;
  width: 25%;
  padding: 15px 15px;
`;

export const CommentForm = ({ onCommentSubmit }: { onCommentSubmit: (event: any) => void }) => {
  return (
    <Container onSubmit={onCommentSubmit}>
      <InputField type="text" id="name" name="name" placeholder="Name" required />
      <InputField type="text" id="email" name="email" placeholder="Your email address" required />
      <TextArea name="comment" id="comment" placeholder="Comment" rows={10} required />
      <SubmitButton type="submit" value="Submit" />
    </Container>
  );
};
