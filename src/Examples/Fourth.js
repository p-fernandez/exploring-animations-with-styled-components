import React, { Component } from 'react';
import styled from 'styled-components';
import Page from '../Page';

const StyledInput = styled.input`
  color: white;
  display: grid;
  background-color: ${props => props.inputType === 'String' ? 'gold' : 'mistyrose'}; 
  border: 1vw solid maroon;
  border-radius: 3vw;
  height: 6vw;
  width: 60vw;
  font-size: 4vw;
  font-weight: bold;
  justify-content: center;
  margin-top: 5vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1vw;
  text-align: center;
  text-transform: uppercase;
  -webkit-appearance: none;
  transition: all 0.6s linear;
  &:active, &:focus {
    outline: 0;
  }
  &::-webkit-input-placeholder {
    color: maroon;
    text-align: center;
    opacity: 1;
  }
  &:focus::-webkit-input-placeholder {
    color: maroon;
    text-align: center;
    opacity: 0.5;
  }
`;

const StyledText = styled.p`
  color: black;
  font-size: 5vw;
  height: 20vw;
  width: 60vw;
  text-align: center;
  margin: auto;
  &:before {
    content: 'That is a ${props => props.inputType}';
    color: maroon;
  }
`;

class Fourth extends Component {
  constructor(props) {
    super(props);
    this.state = { type: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    const type = isNaN(value) ? 'String' : 'Number';
    this.setState({ type });
  }

  render() {
    const { type } = this.state;
    return(
      <Page>
        <StyledInput inputType={type} placeholder='WRITE' onKeyUp={this.onChange} />
        {type && type !== '' &&
        <StyledText inputType={type} />}
      </Page>
    );
  }
}

export default Fourth;
