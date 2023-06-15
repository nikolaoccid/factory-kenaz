import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import logoWhite from '/logo-white.png';

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
const LogoImage = styled.img`
  width: 14px;
  height: 21px;
`;
export const Logo = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');
  return (
    <Container onClick={goHome}>
      <LogoImage src={logoWhite} alt="Logo white" />
    </Container>
  );
};
