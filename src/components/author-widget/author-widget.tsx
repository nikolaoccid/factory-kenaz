import styled from '@emotion/styled';
import React from 'react';
interface Props {
  authorImage: string;
  authorDescription: string;
}
const OuterContainer = styled.div`
  background-color: #eeeeee;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding-left: 30px;
  padding-bottom: 30px;
  gap: 10px;
`;
const TextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  max-width: 70%;

  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #444444;
`;
const AuthorHeading = styled.h2`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #363f48;
`;
const AuthorDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
export const AuthorWidget = ({ authorImage, authorDescription }: Props) => {
  return (
    <OuterContainer>
      <Container>
        <AuthorHeading>About the author</AuthorHeading>
        <AuthorDetails>
          <img src={authorImage} />
          <TextContainer>
            <p>{authorDescription}</p>
          </TextContainer>
        </AuthorDetails>
      </Container>
    </OuterContainer>
  );
};
