import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: rgb(59, 54, 99);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 53px;
`;
const NavItem = styled(Link)`
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 32px 12px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #fcc44d;
  }
`;
const NavText = styled.span`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(172, 179, 186, 0.3);
  &:hover {
    border-bottom-color: rgba(252, 196, 77, 0.3);
  }
`;
export const ArticlesNavigation = () => {
  return (
    <Container>
      <nav>
        <NavItem to="/">
          <NavText>Popular</NavText>
        </NavItem>
        <NavItem to="/">
          <NavText>Top rated</NavText>
        </NavItem>
        <NavItem to="/">
          <NavText>Comments</NavText>
        </NavItem>
      </nav>
    </Container>
  );
};
