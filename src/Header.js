import React from 'react';
import styled from 'styled-components';

import Router from './Router';
import StyledLink from './StyledLink';
import Title from './Title';


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
