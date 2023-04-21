import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
interface Props {
  text: string;
}
const Anchor = styled(Link)`
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #3677b5;

  border-bottom-color: rgba(54, 119, 181, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  text-decoration: none;
`;
export const SectionLink = ({ text }: Props) => {
  return <Anchor to="/">{text}</Anchor>;
};
