import { keyframes } from 'styled-components';

export const twinkle = keyframes`
  5% {
    opacity: 1
  }
  15% {
    opacity: .3
  }
  68% {
    opacity: .3
  }
  74% {
    opacity: 1
  }
  78% {
    opacity: .3
  }
`;
export const blurFadeIn = keyframes`
  0% {
    opacity: 1;
    text-shadow: 0px 0px 40px #fff;
  }
  50% {
    opacity: 0.5;
    text-shadow: 0px 0px 10px #fff;
  }
  100% {
    opacity: 1;
    text-shadow: 0px 0px 1px #fff;
  }
`;
export const fadeInRotate = keyframes`
  0% {
    opacity: 0;
  
  }
  25% {
    opacity: 0.2;
  
  }
  45% {
    opacity: 0.45;
  
  }
  55% {
    opacity: 0.55;
  
  }
  75% {
    opacity: 0.75;
  
  }
  100% {
    opacity: 1;
   
  }
`;
