import styled from '@emotion/styled';
import React from 'react';

import { MagnifierButton } from '../header/components/magnifier-button/magnifier-button';
const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  height: 53px;
  align-items: center;
`;
const NavItem = styled.a`
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 27px;
  color: #fff;
  text-decoration: none;
`;
export const Navbar = () => {
  return (
    <Navigation>
      <NavItem href="#"> Media</NavItem>
      <NavItem href="#"> Marketing</NavItem>
      <NavItem href="#"> Contact</NavItem>
      <MagnifierButton />
    </Navigation>
  );
};
