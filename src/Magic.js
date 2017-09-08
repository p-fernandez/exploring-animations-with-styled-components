import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.pressed ? 'maroon' : 'white'};
  color: ${props => props.pressed ? 'white' : 'maroon'};
  cursor: pointer;
  border: 5px solid maroon;
  font-size: 2em;
  font-weight: bold;
`;

const Magic = ({ text, pressed, onClick }) => (
  <StyledButton pressed={pressed} onClick={onClick}>{text ? text : 'MAGIC'}</StyledButton>
);

export default Magic;
