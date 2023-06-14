import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { blockProps } from '../../../../utils/block-props';

const Container = styled.div`
  background-color: rgb(59, 54, 99);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 18px 0;
`;
const NavItem = styled(Link, blockProps('isActive'))<{ isActive: boolean }>`
  cursor: pointer;
  font-family: 'Varela Round', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  padding: 32px 12px;
  text-decoration: none;
  color: ${(props) => (props.isActive ? '#fcc44d' : '#ffffff')};
  &:hover {
    color: #fcc44d;
  }
`;
const NavText = styled.span<{ isActive: boolean }>`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => (props.isActive ? 'rgba(252, 196, 77, 0.3)' : 'rgba(172, 179, 186, 0.3)')};
  &:hover {
    border-bottom-color: rgba(252, 196, 77, 0.3);
  }
`;
export const ArticlesNavigation = ({ navItems }: { navItems: string[] }) => {
  const [navItem, setNavItem] = useState('Popular');

  return (
    <Container>
      <nav>
        {navItems.map((nav) => (
          <NavItem isActive={nav === navItem} to="" key={nav} onClick={() => setNavItem(nav)}>
            <NavText isActive={nav === navItem}>{nav}</NavText>
          </NavItem>
        ))}
      </nav>
    </Container>
  );
};
