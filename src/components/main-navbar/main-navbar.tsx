import styled from '@emotion/styled';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getPath } from '../../utils/get-path';
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
const NavItem = styled(Link)<{ bordercolor: string; isActive: boolean }>`
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
  background-color: ${(props) => (props.isActive ? props.bordercolor : '')};
  &:hover {
    background-color: ${(props) => props.bordercolor};
  }
`;
const navItems = [
  { name: 'News', route: '/news', bordercolor: '#299EC3' },
  { name: 'Business', route: '/business', bordercolor: '#EE6151' },
  { name: 'Sport', route: '/sport', bordercolor: '#84C14F' },
  { name: 'Life', route: '/life', bordercolor: '#5DCFF3' },
  { name: 'Tech', route: '/tech', bordercolor: '#FCC44D' },
  { name: 'Travel', route: '/travel', bordercolor: '#A99765' },
];
export const MainNavbar = () => {
  return (
    <Container>
      <Navigation>
        {navItems.map(({ route, name, bordercolor }) => (
          <NavItem
            key={route}
            to={route}
            bordercolor={bordercolor}
            isActive={getPath().toLowerCase() === name.toLowerCase()}
          >
            {name}
          </NavItem>
        ))}
      </Navigation>
    </Container>
  );
};
