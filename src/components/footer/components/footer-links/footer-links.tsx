import styled from '@emotion/styled';
import React from 'react';
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Divider = styled.div`
  margin-bottom: 17px;
  height: 1px;
  width: 100%;
  background-color: #333333;
`;
const ItemsGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BodyText = styled.text`
  font-family: 'Varela Round', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
`;
const InnerContainer = styled.div`
  width: 940px;
`;
export const FooterLinks = () => {
  return (
    <Container>
      <InnerContainer>
        <Divider />
        <ItemsGroup>
          <BodyText>© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</BodyText>
          <BodyText>Typography - Templates - Contact Form - 404 Page</BodyText>
        </ItemsGroup>
      </InnerContainer>
    </Container>
  );
};
