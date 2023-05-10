import styled from '@emotion/styled';
import React from 'react';
interface Props {
  text: string;
}
const Container = styled.div`
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #363f48;
  padding: 15px 0 0 30px;
  text-transform: capitalize;
`;
export const CategoryTitle = ({ text }: Props) => {
  return <Container>{text}</Container>;
};
