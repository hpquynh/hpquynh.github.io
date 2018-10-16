import { createGlobalStyle } from 'styled-components';
import { rem, normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html{
    box-sizing: border-box;
    font-size: 100%;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
    height: auto;
    position: relative;
  }
  html:not(.wf-active){
    font-family: ${props => props.theme.font.fallback};
    font-family: ${props => props.theme.font.main};
  }
  html.wf-active{
    font-family: ${props => props.theme.font.main}
  }
  body{
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     * {
      font-size: 13px;
      font-size: ${rem('13px')};
      font-weight: 300;
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