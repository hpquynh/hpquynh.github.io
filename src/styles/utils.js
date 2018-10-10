import { css } from 'styled-components';

export function displayFlex(direction = 'row', justify = 'flex-start', align = 'flex-start') {
  return `
    display: flex;
    flow-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `;
}

const sizes = {
  xs: '575px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
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