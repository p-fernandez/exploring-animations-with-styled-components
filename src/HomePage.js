import React from 'react';
import styled from 'styled-components';
import Page from './Page';

const StyledP = styled.span`
  color: ${props => props.color};
  font-size: 2vw;
  margin-top: 2vw;
  padding: 0 5vw;
`;

const HomePage = () => (
  <Page>
    <StyledP color='maroon'>😤 Trying to animate for Native is hard using SC. Need to go by Animated API. Hard to integrate CSS animations with SC Native. I resigned in my desire of universal purpose. Still need 2 big different codes if you want to have nice animations.</StyledP>
    <StyledP color='gold'>😄 Still useful for web even with CSS animations. And allows nesting. And animations will eat GPU resources leaving processors alone.</StyledP>
    <StyledP color='gold'>😄 Simple static pages with no animations can use SC Native lib and have one code for both platforms. Quite high performance delivery (🙃) for MVP's.</StyledP>
    <StyledP color='maroon'>😤 With high number of similar objects warns to go through css-object approach instead template literals. Have not measured it but may performance problems?</StyledP>
  </Page>
);

export default HomePage;
