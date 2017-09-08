import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Page from '../Page';
import Magic from '../Magic';

const GridContainer = styled.div`
  display: grid;
  grid-auto-columns: minmax(5vw, auto);
  grid-auto-flow: dense;
  grid-auto-rows: minmax(5vw, auto);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  grid-template-columns: repeat(8, 4vw);
  grid-template-rows: repeat(8, 4vw);
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 2.7vh;
  padding-top: 3vh;
`;

const Square = styled.div`
  display: grid;
  justify-content: center;
  height: 4vw;
  width: 4vw;
`;

const fadeIn = keyframes`
	from {
    height: 1vw;
    opacity: 0;
    width: 1vw;
	}

	to {
    height: 4vw;
		opacity: 1;
    width: 4vw;
	}
`;

const SquareFaded = styled(Square)`
  height: 1vw;
  width: 1vw;
	animation: ${fadeIn} 5s linear infinite;
`;

const SquareGrid = ({ animated }) => {
  const Component = animated ? SquareFaded : Square;
  const arr = [];
  for(let i = 1; i <= 64 ; i++) {
    const h = Math.floor(Math.floor(Math.random()*360));
    const s = Math.floor(Math.random()*100);
    const l = Math.floor(Math.random()*100);
    const a = Math.random();
    arr.push(<Component key={i} style={{ backgroundColor: `hsla(${h},${s}%,${l}%,${a})` }} />);
  }
  return(
    <GridContainer>{arr}</GridContainer>
  );
};

class First extends Component {
  constructor(props) {
    super(props);
    this.state = { animated: false };
    
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const animated = !this.state.animated;
    this.setState({ animated });
  }

  render() {
    const { animated } = this.state;
    return(
      <Page>
        <SquareGrid animated={animated} />
        <Magic pressed={animated} onClick={this.onClick} />
      </Page>
      );
  }
};

export default First;
