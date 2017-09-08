import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../Page';
import Magic from '../Magic';

const Line = 'STEPHEN';
const Line2 = 'KING';

const Text = styled.div`
  color: red;
  display: grid;
  font-size: 19.3em;
  font-weight: bold;
   -webkit-text-fill-color: transparent;
  background: -webkit-linear-gradient(transparent, transparent), url('img/king.jpg') repeat;
  background: -o-linear-gradient(transparent, transparent);
  text-align: center;
  transform: scale(${props => window.innerWidth / props.x < 2 ? '1' : '-1'},
    ${props => window.innerHeight / props.y > 2 ? '-1' : '1'});
  transition: ${props => props.smooth ? 'all' : 'none'} 2s ease-in;
  -webkit-background-clip: text;
  width: 100vw;
`;

class Second extends Component {
  constructor(props){
    super(props);

    this.state = { x: 0, y: 0, animated: false };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const animated = !this.state.animated;
    this.setState({ animated });
  }

  handleMouseMove(event) {
    this.setState({ x: event.screenX, y: event.screenY });
  }

  render(){
    const { x, y, animated } = this.state;
    return(
      <Page onMouseMove={this.handleMouseMove}>
        <Text x={x} y={y} smooth={animated}>
          {Line}
          <br/>
          {Line2}
        </Text>
        <Magic text='SMOOTH' pressed={animated} onClick={this.onClick} />
      </Page>
    );
  }
}

export default Second;
