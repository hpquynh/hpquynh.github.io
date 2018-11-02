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

export const backgroundChange = keyframes`
  0% {
    background-color: #f5f5f5;
  }
  10% {
     background-color: #8e91f4;
  }
  15% {
   background-color: #8d8af1;
  }
  25% {
    background-color: #48e8f4;
  }
  40% {
    background-color: #fffe6a;
  }
  50%{
    background-color: #f5f5f5;
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

export const moveToRight = keyframes`
  0%{
    transform: translate(-50%,0);
  }
  55%{
    transform: translate(30%,0);
  }
`;

export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  60%{
    opacity: 1;
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

export const slideInDown = keyframes`
 from {
    transform: translate3d(0, 500%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
export const slideLeft = keyframes`
 0%{
    width: 0;
  }
  70%{
    width: 40%;
  }
`;

export const openUp = keyframes`
 from{
     border-right-width: 100vw;
 }
 to{
  border-right-width: 0;
 }
`;

export const openDown = keyframes`
 from{
     border-left-width: 100vw;
 }
 to{
     border-left-width: 0;
       
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
