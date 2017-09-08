import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Router from './Router';
import Title from './Title';

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    background-color: #a99c7a;
    transition: all 1s ease-in;
  }
`;

const HeaderView = styled.div`
  display: grid;
  grid-template-rows: 18vh 2vh;
  grid-auto-rows: minmax(1em, auto);
  height: 20vh;
  width: 100vw;
`;

const Header = () => (
    <HeaderView>
      <StyledLink to='/'><Title name='Animating styled components' /></StyledLink>
      <Router />
    </HeaderView>
);

export default Header;
