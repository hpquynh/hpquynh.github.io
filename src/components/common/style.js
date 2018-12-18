
import styled, { css } from 'styled-components';
import { displayFlex, fontSize } from '../../styles/utils';
import {
  slideBgLeft, slideBgRight, appearIn,
} from '../../styles/keyframes';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
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
  position: absolute;
  right: 25px;
  bottom: 10px;
  z-index: 2;
  ${fontSize('18px')}
  span{
    ${ColorfulText}
    ${fontSize('25px')}
    vertical-align: middle;
    margin-right: 5px;
    &:after{
      content: attr(title);
      left: 0;
      top: 0;
    }
  }
  ${props => props.isDark && css`
    color: ${props.theme.color.moon};
  `}
`;

// export const AnimatedWrapper = styled.div`
//   position: relative;
//   > * {
//     animation: ${fadeIn} 1.5s ease;
//   }
//   &:before, &:after{
//     content: '';
//     position: fixed;
//     z-index: 4;
//     transition: all .5s ease-in-out;
//   }
//   &:before{
//     width: 0;
//     height: 0;
//     border-left: 0 solid transparent;
//     border-right: 0 solid transparent;
//     border-top: 100vh solid #1e2e37;
//     animation: ${openUp} 0.5s ease;
//     left: 0;
//     top: 0;
//   }
//   &:after{
//     width: 0;
//     height: 0;
//     border-left: 0 solid transparent;
//     border-right: 0 solid transparent;
//     border-bottom: 100vh solid #1e2e37;
//     animation: ${openDown} 0.5s ease;
//     top: 0;
//     right: 0;
//   }
// `;

export const AnimatedWrapper = styled.div`
  position: relative;
  transition: all .5s ease;
  overflow: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-snap-destination: 0% 0%;
  scroll-snap-type: mandatory;
  > * {
    animation: ${appearIn} 2.5s ease; 
  }
  &:before, &:after{
    content: '';
    position: fixed;
    will-change: transform;
    top: 0;
    bottom: 0;
    z-index: 4;
    opacity: 1;
    width: 50%;
    height: 100%;
    background-color: ${props => props.theme.color.dark};
    background-image: linear-gradient(to top, ${props => props.theme.color.dark} 0%, ${props => props.theme.color.darker} 100%);
  }
  &:before{
    left: 0;
    right: auto;
    animation: ${slideBgLeft} 0.5s forwards; 
  }
  &:after{
    left: auto;
    right: 0;
    animation: ${slideBgRight} 0.6s forwards;
  }
 
`;
