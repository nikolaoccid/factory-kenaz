import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { blockProps } from '../../../../utils/block-props';
interface Props {
  pages: number;
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  padding: 30px 0 20px 30px;
`;
const PaginationItem = styled(Link, blockProps('isActive'))<{ isActive: boolean }>`
  cursor: grab;
  text-decoration: none;
  font-family: 'Varela Round';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  background-color: ${(props) => (props.isActive ? '#4d4382' : '#dddddd')};
  color: ${(props) => (props.isActive ? '#ffffff' : '#4d4382')};
  padding: 8px 12px;

  &:hover {
    color: #ffffff;
    background-color: #4d4382;
  }
`;
export const Pagination = ({ pages }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagesArray = [...Array(pages)];

  return (
    <Container>
      {pagesArray.map((value, index) => (
        <PaginationItem
          key={index}
          to=""
          onClick={() => setCurrentPage(index + 1)}
          isActive={currentPage === index + 1}
        >
          {index + 1}
        </PaginationItem>
      ))}
    </Container>
  );
};
