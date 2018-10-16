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