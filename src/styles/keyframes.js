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

export const wave1 = keyframes`
  0% {
    margin-left: 0;
    transform: translate3d(0, 0 ,0);
  }
  70% {
    margin-left: -110px;
    transform: translate3d(-20px, 10px,30px) skew(2deg,-2deg);
  }
   100% {
    margin-left: 0;
    transform: translate3d(0,0,0) skew(0);
  }
`;

export const wave2 = keyframes`
  0% {
    transform: translate3d(0, 0 ,0) skew(0);
  }
  50% {
    transform: translate3d(-70px, 10px,30px) skew(9deg,5deg);
  }
   100% {
     transform: translate3D(0,0,0) skew(0);
  }
`;


export const colorChange = keyframes`
  0% {
    color: #3c3737;
  }
  10% {
    color: #fffe6a;
  }
  15% {
   color: #48e8f4;
  }
  25% {
   color: #8d8af1;
  }
  40% {
    color: #8e91f4;
  }
  50%{
    color: #3c3737;
  }
 
`;

export const appearIn = keyframes`
  0%{
    opacity: 0;
  }
  60%{
    opacity: 0;
  }
  60%{
    opacity: 1;
  }
`;
export const kira = keyframes`
  0%{
    border-color: #bfffff;
  }
  70%{
    border-color: #fffc75;
  }
`;
export const slideBgLeft = keyframes`
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.815, 0.090, 0.885, 0.140);
  }
  50% {
    transform: translateX(-35%) skewX(20deg);
  }
  100% {
    -webkit-animation-timing-function: cubic-bezier(0.815, 0.090, 0.885, 0.140);
     transform: translateX(-100%);
  }
`;
export const slideBgRight = keyframes`
  0% {
    -webkit-animation-timing-function: cubic-bezier(0.815, 0.090, 0.885, 0.140);
  
  }
  50% {
    transform: translateX(115%) skewX(20deg);
  }
  100% {
    -webkit-animation-timing-function: cubic-bezier(0.815, 0.090, 0.885, 0.140);
    
     transform: translateX(200%);
   
   
  }
`;

export const ripple = keyframes`
  0% {
    top: 28px;
  left: 28px;
  width: 0;
  height: 0;
  opacity: 1;
}
  100% {
    top: -1px;
  left: -1px;
  width: 58px;
  height: 58px;
  opacity: 0;
}
`;

export const shake = keyframes`
from,
  to {
  
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
 
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    
    transform: translate3d(5px, 0, 0);
  }
`;

export const changeHeight = keyframes`
 from{
     height: 0;
 }
 to{
    height: 40px;
 }
`;

export const fadeIn = keyframes`
 from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
  
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
   
    transform: translate3d(0, 0, 0);
  }
`;

export const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
  
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
   
    transform: scale3d(1, 1, 1);
  }
`;
export const BounceIn = keyframes`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;