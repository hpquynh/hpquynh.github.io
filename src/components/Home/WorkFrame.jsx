// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { moveToRight, colorChange, backgroundChange } from '../../styles/keyframes';

type Props = {
  image: string,
  isAnimated: boolean,
}
export default class WorkFrame extends React.PureComponent<Props> {
  render() {
    const { image, isAnimated } = this.props;
    return (
      <FrameBlock isAnimated={isAnimated}>
        <img src={image} alt="object" />
      </FrameBlock>
    );
  }
}

const FrameBlock = styled.div`
  margin-top: 40px;
  width: 300px;
  height: 400px;
  max-width: 100%;
  padding: 15px;
  display: flex;
  align-items: flex-end;
  background-color: ${props => props.theme.color.mist};
  position: relative;
  transform: translate(-50%,0);
  &:before{
    content: "heartmade by me";
    position: absolute;
    top: 30px;
    left: 20px;
    font-size: 45px;
    font-size: ${rem('45px')};
    color: ${props => props.theme.color.shadow};
  }
  img{
    width: 120%;
    height: auto;
  }
  ${props => props.isAnimated && css`
    animation: ${backgroundChange} 3s 1s ease, ${moveToRight} 7s 0s ease;
    transform: translate(30%,0);
    &:before{
      animation: ${colorChange} 4s ease;
      animation-delay: 2s;
    }
  `}
`;
