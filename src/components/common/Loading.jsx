// @flow
import React from 'react';
import styled from 'styled-components';
import { ripple } from '../../styles/keyframes';

const LoadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px;
`;
const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  span{
    position: absolute;
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(1){
      border: 4px solid ${props => props.theme.color.sun};
    }
    &:nth-child(2){
      border: 4px solid ${props => props.theme.color.moon};
     animation-delay: -0.5s;
    }
  }
`;
export default class Loading extends React.PureComponent {
  render() {
    return (
      <LoadingWrapper>
        <Ripple>
          <span />
          <span />
        </Ripple>
      </LoadingWrapper>
    );
  }
}
