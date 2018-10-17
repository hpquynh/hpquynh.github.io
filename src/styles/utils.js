import { css } from 'styled-components';
import { rem } from 'polished';

export function displayFlex(direction = 'row', justify = 'flex-start', align = 'flex-start') {
  return `
    display: flex;
    flex-flow: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
}
export function buttonStyle(background = '#000', color = '#fff', font = '13px', padding = '5px') {
  return `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.font.second};
    background: ${background};
    color: ${color};
    font-size: ${font};
    font-size: ${rem(font)};
    padding: ${padding};
    cursor: pointer;
    transition: all .2s ease;
    &:hover{
      opacity: 0.8;
    }
  `;
}
const sizes = {
  xs: '575',
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
};

export const mediaMax = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const mediaMin = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});