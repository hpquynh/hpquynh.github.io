
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { displayFlex } from '../../styles/utils';

export const Section = styled.section`
  background-color: transparent;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  ${displayFlex('row', 'center', 'flex-start')}
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
 
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
