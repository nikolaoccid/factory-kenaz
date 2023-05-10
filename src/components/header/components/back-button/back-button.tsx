import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import backArrowWhite from './assets/left-white-arrow.png';

const Container = styled.button`
  display: flex;
  width: 63px;
  height: 53px;
  background-color: rgb(48, 48, 48);
  justify-content: center;
  align-items: center;

  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
const ArrowImage = styled.img`
  width: 14px;
  height: 21px;
`;
export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Container onClick={goBack}>
      <ArrowImage src={backArrowWhite} alt="Back arrow white" />
    </Container>
  );
};
