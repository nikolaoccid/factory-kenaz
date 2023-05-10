import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  padding: 30px 0 20px 30px;
`;
const PaginationItem = styled(Link)`
  cursor: grab;
  text-decoration: none;
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  background-color: #dddddd;
  color: #4d4382;
  padding: 8px 12px;

  &:hover {
    color: #ffffff;
    background-color: #4d4382;
  }
`;
export const Pagination = () => {
  return (
    <Container>
      <PaginationItem to="/">1</PaginationItem>
      <PaginationItem to="/">2</PaginationItem>
      <PaginationItem to="/">3</PaginationItem>
      <PaginationItem to="/">4</PaginationItem>
      <PaginationItem to="/">5</PaginationItem>
      <PaginationItem to="/">6</PaginationItem>
      <PaginationItem to="/">7</PaginationItem>
      <PaginationItem to="/">8</PaginationItem>
      <PaginationItem to="/">9</PaginationItem>
      <PaginationItem to="/">10</PaginationItem>
    </Container>
  );
};
