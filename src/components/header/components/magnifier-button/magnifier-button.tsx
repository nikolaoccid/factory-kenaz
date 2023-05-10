import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import magnifier from './assets/magnifier.png';

const Container = styled.button`
  display: flex;
  width: 62px;
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
  width: 18px;
  height: 18px;
`;
export const MagnifierButton = () => {
  const navigate = useNavigate();
  const goBack = () => navigate('/');
  return (
    <Container onClick={goBack}>
      <ArrowImage src={magnifier} alt="Back arrow white" />
    </Container>
  );
};
