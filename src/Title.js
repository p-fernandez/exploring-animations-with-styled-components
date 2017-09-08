import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
  color: red;
  display: grid;
  font-size: 5em;
  font-weight: bold;
   -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(transparent, transparent), url('img/king.jpg') repeat;
  background: -o-linear-gradient(transparent, transparent);
  justify-content: center;
  -webkit-background-clip: text;
  width: 100vw;
`;

const Title = ({ name }) => (
  <TitleDiv>{name}</TitleDiv>
);

export default Title;
