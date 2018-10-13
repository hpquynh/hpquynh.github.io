import { createGlobalStyle } from 'styled-components';
import { rem, normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html{
    min-height: 100vh;
  }
  html:not(.wf-active){
    font-family: ${props => props.theme.font.fallback};
    font-family: ${props => props.theme.font.main};
  }
  html.wf-active{
    font-family: ${props => props.theme.font.main}
  }
  body{
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    overflow-y: auto;
     * {
      font-size: 13px;
      font-size: ${rem('13px')};
      color: ${props => props.theme.color.grey};
      line-height: 1.4;
     }
     .p-l-20{
        padding-left: 20px;
     }
     .text-right{
        text-align: right;
     }
  }
`;
