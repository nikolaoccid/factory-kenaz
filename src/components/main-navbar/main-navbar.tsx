import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { blockProps } from '../../utils/block-props';
import { getCategoryFromPath } from '../../utils/get-category-from-path';
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
const NavItem = styled(Link, blockProps('borderColor', 'isActive'))<{
  borderColor: string;
  isActive: boolean;
}>`
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
  border-bottom-color: ${(props) => props.borderColor};
  background-color: ${(props) => (props.isActive ? props.borderColor : '')};
  &:hover {
    background-color: ${(props) => props.borderColor};
  }
`;
const navItems = [
  { name: 'News', route: '/news', borderColor: '#299EC3' },
  { name: 'Business', route: '/business', borderColor: '#EE6151' },
  { name: 'Sport', route: '/sport', borderColor: '#84C14F' },
  { name: 'Life', route: '/life', borderColor: '#5DCFF3' },
  { name: 'Tech', route: '/tech', borderColor: '#FCC44D' },
  { name: 'Travel', route: '/travel', borderColor: '#A99765' },
];
export const MainNavbar = () => {
  return (
    <Container>
      <Navigation>
        {navItems.map(({ route, name, borderColor }) => (
          <NavItem
            key={route}
            to={route}
            borderColor={borderColor}
            isActive={getCategoryFromPath().toLowerCase() === name.toLowerCase()}
          >
            {name}
          </NavItem>
        ))}
      </Navigation>
    </Container>
  );
};
