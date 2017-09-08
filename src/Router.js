import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const LinkStyled = styled(Link)`
  background-color: white;
  color: maroon;
  padding-left: 1em;
  text-decoration-color: transparent;
  text-decoration-line: none;
  text-decoration-style: unset;
  text-transform: none;
  transition: all 0.3s ease-in;
  &:hover {
    color: white;
    background: linear-gradient(45deg, gold, maroon);
    transition: all 1s ease-out;
    text-transform: uppercase;
  }
 `;

const Router = () => (
  <LinkList>
    <LinkStyled to="/first">Styled components</LinkStyled>
    <LinkStyled to="/second">Dead zone letters</LinkStyled>
    <LinkStyled to="/third">Spin me like a record</LinkStyled>
    <LinkStyled to="/fourth">Rushing to make a fourth</LinkStyled>
  </LinkList>
);

export default Router;
