// @flow

import { createGlobalStyle } from 'styled-components';
import { rem, normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html{
    min-height: 100vh;
    font-family: ${props => props.theme.font.fallback};
  }
  html.wf-active{
    font-family: ${props => props.theme.font.main}
  }
  body{
    position: relative;
    min-height: 100vh;
    overflow: hidden;
     * {
      font-size: 13px;
      font-size: ${rem('13px')};
      color: ${props => props.theme.color.grey};
     }
  }
`;
