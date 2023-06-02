import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { articleNameDashes } from '../../../../utils/article-name-dashes';
interface Props {
  text: string;
  linkTo: string;
  state: object;
}
const Container = styled(Link)`
  cursor: grab;
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 8px 15px;
  color: #ffffff;
  background-color: #4d4382;
  text-decoration: none;
  &:hover {
    background-color: #423c70;
  }
`;
export const ArticleCtaButton = ({ text, linkTo, state }: Props) => {
  return (
    <Container to={linkTo} state={state}>
      {text}
    </Container>
  );
};
