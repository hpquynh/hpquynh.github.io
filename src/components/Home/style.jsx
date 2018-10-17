
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { displayFlex } from '../../styles/utils';
import { openUp, openDown, fadeIn } from '../../styles/keyframes';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;
export const FlexColumn = styled.div`
 ${displayFlex('column', 'flex-start', 'flex-start')}

 > * {
  width: 100%;
 }
`;
export const ColorfulText = css`
  color: #fbe6d3;
  font-weight: 400;
   &:after {
    position: absolute;
    z-index: 2;
    overflow: hidden;
    color: ${props => props.theme.color.shadow};
    mix-blend-mode: darken;
    text-shadow: 0.15rem -0.15rem ${props => props.theme.color.moon}, -0.25rem -0.25rem ${props => props.theme.color.sun}, 0 0.2rem ${props => props.theme.color.lemon}
   }
`;
export const TextRight = styled.div`
  text-align: right;
`;
export const NavTitle = styled.div`
  ${ColorfulText}
  position: absolute;
  right: 25px;
  bottom: 10px;
  font-size: 25px;
  font-size: ${rem('25px')};
  &:after{
    content: attr(title);
    left: 0;
    top: 0;
  }
`;

export const AnimatedWrapper = styled.div`
  position: relative;
  > * {
    animation: ${fadeIn} 1.5s ease;
  }
  &:before, &:after{
    content: '';
    position: fixed;
    z-index: 4;
    transition: all .5s ease-in-out;
  }
  &:before{
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    border-top: 100vh solid #1e2e37;
    animation: ${openUp} 0.5s ease;
    left: 0;
    top: 0;
  }
  &:after{
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 100vh solid #1e2e37;
    animation: ${openDown} 0.5s ease;
    top: 0;
    right: 0;
  }
`;