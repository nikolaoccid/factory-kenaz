import styled from '@emotion/styled';
import React from 'react';
interface Props {
  text: string;
}
const Container = styled.div`
  font-family: 'Bitter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;
export const SectionHeading = ({ text }: Props) => {
  return <Container>{text}</Container>;
};
