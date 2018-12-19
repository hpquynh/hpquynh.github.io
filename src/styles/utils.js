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
export function fontSize(size = '14px') {
  return `
    font-size: ${size};
    font-size: ${rem(size)};
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
    ${fontSize(font)}
    ${fontSize(font)}
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
  mdMin: '576',
  mdMax: '767',
  lgMin: '768',
  lgMax: '991',
  xlMin: '992',
  xlMax: '1199',
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



export const getCurrentSection = (point, height, total) => {
  let result = 0;
  for (let i = 1; i <= total; i++) {
    const prev = height * (i - 1);
    const next = height * i;
    if (point === prev) {
      result = (i - 1);
      break;
    }
    if (point === next) {
      result = i;
      break;
    }
    if (point > prev && point < next) {
      result = (i - 1);
      break;
    }
  }
  return result;
};

export const randomStar = () => {
  let star = '';
  for (let i = 0; i < 100; i++) {
    const delay = Math.random(100) * 100 >> 1;
    star += `&:nth-of-type(${i}){
      animation-delay: -${delay}s;
      top: ${(Math.random(99) * 100)}vh;
      left: ${(Math.random(99) * 100)}vw;
    }`;
  }
  return star;
};