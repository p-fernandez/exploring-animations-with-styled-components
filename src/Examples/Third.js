import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Page from '../Page';

const FullHeightPage = styled(Page)`
  height: 80vh;
`;

const pentagram = keyframes`
  0% {
    top: 0;
    left: calc(50% - 1vw);
    transform: rotate(0deg);
  }

  50% {
    background-color: violet;
    border-radius: 0;
    height: 5vw;
    left: calc(50% - 5vw);
    transform: rotate(90deg);
    width: 5vw;
  }

  100% {
    background-color: indigo;
    left: calc(50% - 1vw);
    transform: rotate(180deg);
    top: 80vh;
  }
`;

const Spinner = styled.div`
  background-color: pink;
  border-color: white;
  border-size: 1px;
  border-style: solid;
  border-radius: 1vw;
  height: 1vw;
  position: absolute;
  width: 1vw;
  transition: all 1s linear;
  animation: ${pentagram} 10s linear infinite;
  &:before {
    display: block;
    background-color: blue;
    border-radius: 1vw;
    content: "";
    width: 1vw;
    height: 1vw;
    position: relative;
    left: -1vw;
  }
  &:after {
    display: block;
    background-color: lightblue;
    border-radius: 1vw;
    content: "";
    width: 1vw;
    height: 1vw;
    position: relative;
    right: 1vw;
  }
`;

class Third extends Component {
  render() {
    return(
      <FullHeightPage>
        <Spinner />
      </FullHeightPage>
    );
  }
}

export default Third;
