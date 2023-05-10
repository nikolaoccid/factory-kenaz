import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #4d4382;
  height: 53px;
`;
const Navigation = styled.nav`
  width: 940px;
  display: flex;
  align-items: center;
  height: 53px;
`;
const NavItem = styled(Link)<{ bordercolor: string }>`
  font-family: 'Bitter', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 14px 15px;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.bordercolor};
  &:active,
  &:hover {
    background-color: ${(props) => props.bordercolor};
  }
`;
export const MainNavbar = () => {
  return (
    <Container>
      <Navigation>
        <NavItem to="/news" bordercolor="#299EC3">
          News
        </NavItem>
        <NavItem to="/business" bordercolor="#EE6151">
          Business
        </NavItem>
        <NavItem to="/sport" bordercolor="#84C14F">
          Sport
        </NavItem>
        <NavItem to="/life" bordercolor="#5DCFF3">
          Life
        </NavItem>
        <NavItem to="/tech" bordercolor="#FCC44D">
          Tech
        </NavItem>
        <NavItem to="/travel" bordercolor="#A99765">
          Travel
        </NavItem>
      </Navigation>
    </Container>
  );
};
