import React from 'react';
import styled from 'styled-components';
import Page from './Page';

const StyledP = styled.span`
  color: ${props => props.color};
  font-size: 2vw;
  margin-top: 2vw;
  padding: 0 5vw;
`;

const WTHSC = () => (
  <Page>
    <StyledP color='black'>Styled Components is a CSS-in-JS library that uses ES6 template literals to remove the mapping between styles and components, creating a React component with styles attached.</StyledP>
    <StyledP color='black'>Flattens the literals and inject markers in the stylesheet to preserve order specificity. Then it resolves interpolation functions by passing them each props, transforming the CSS generated and injecting it in a stylesheet.</StyledP>
    <StyledP color='black'>It attaches the classes generated to the DOM nodes via className prop. It injects the stylesheet at the end of the head of the document during runtime.</StyledP>
    <StyledP color='black'>Styled Components is automatically vendor prefixed.</StyledP>
    <StyledP color='black'>Supports all CSS!! ALL!!</StyledP>
    <StyledP color='black'>It can be used with SSR. But needs babel-plugin-styled-components plugin.</StyledP>
    <StyledP color='black'>Dependency on (v2) stylis (https://github.com/thysultan/stylis.js). In v1 was PostCSS</StyledP>
  </Page>
);

export default WTHSC;
