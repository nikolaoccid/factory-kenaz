import styled from '@emotion/styled';
import React from 'react';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  padding-top: 10px;
`;
const Title = styled.p`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #cccccc;
`;
const BodyText = styled.p`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #666666;
`;
const Body = styled.div`
  width: 303px;
`;

const InputText = styled.input`
  height: 30px;
  padding: 10px 15px;
  border: 0;
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #999999;
  background-color: #333333;
`;
const InputButton = styled.input`
  height: 51px;
  width: 112px;
  padding: 0;
  border: 0;
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cccccc;
  background-color: #4d4382;
`;
export const NewsletterDialog = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Body>
        <BodyText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo ante.</BodyText>
      </Body>
      <form>
        <InputText type="text" id="email" name="email" placeholder="Your mail" />
        <InputButton type="submit" value="Subscribe" />
      </form>
    </Container>
  );
};
