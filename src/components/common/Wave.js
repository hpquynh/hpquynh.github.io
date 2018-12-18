// @flow
import React from 'react';
import styled from 'styled-components';
import { wave1, wave2 } from '../../styles/keyframes';
import { mediaMax } from '../../styles/utils';

const WaveWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;
const SmallWave = styled.svg`
  max-width: 100vw;
  width: 689px;
  height: 160px;
  position: absolute;
  top: -5px;
  right: 0;
  z-index: 1;
  user-select: none;
  .wave-wrap{
    stroke: none;
    stroke-width: 1;
    fill: none;
    fill-rule: evenodd;
    transform: translate(-633deg, -42deg);
  }
   ${mediaMax.md`
      width: 100%;
      height: auto;
   `}
`;
const Wave = styled.svg`
  height: auto;
  position: absolute;
  left: 0;
  transform: translate3d(0, 0, 0);
  will-change: transform;
  &:nth-of-type(1){
    width: 60%;
    top: auto;
    bottom: 0;
    animation: ${wave1} 20s cubic-bezier(0.42, 0.0, 0.58, 1.0) infinite;
    z-index: 0;
    ${mediaMax.md`
      width: 90%;
   `}
    ${mediaMax.sm`
      width: 140%;
   `}
  }
  &:nth-of-type(2){
    width: 45%;
    top: auto;
    bottom: 13%;
    animation: ${wave2} 25s cubic-bezier(0.25,0.1,0.25,1) -.125s infinite;
    z-index: 1;
     ${mediaMax.md`
      width: 80%;
      bottom: 4%;
   `}
     ${mediaMax.sm`
      width: 120%;
      bottom: 4%;
   `}
   
  }
  .wave{
    fill-rule: evenodd;
    fill:none;
    stroke-width:1;
    stroke:none;
  }
  .blue{
    fill:#f5f5f5;
  }
  .purple{
    fill:url(#linearGradient-1);
  }
`;
const WaveBlock = () => (
  <div>
    <Wave viewBox="0 0 1186 890">
      <defs />
      <g id="Desktop-HD" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0.000000, -90.000000)">
        <g id="shape" transform="translate(-8.000000, 69.000000)" fill="#f5f5f5">
          <path d="M322.536067,785.755011 C920.206734,580.155902 1210.45484,427.31366 1193.2804,327.228285 C1144.50709,42.9981564 267.006182,194.458557 153.539533,154.708241 C30.6508461,111.657138 0,0 0,0 C0,0 0,304.666667 0,914 L322.536067,785.755011 Z" id="blue" />
        </g>
      </g>
    </Wave>
    <Wave viewBox="0 0 1030 771">
      <defs>
        <linearGradient x1="-11.0621921%" y1="25.7563893%" x2="125.899015%" y2="92.4977791%" id="linearGradient-1">
          <stop stopColor="#ffffff" offset="100%" />
          <stop stopColor="#ffffff" offset="100%" />
        </linearGradient>
      </defs>
      <g id="Desktop-HD" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(0.000000, -174.000000)">
        <g id="shape" transform="translate(-8.000000, 69.000000)" fill="url(#linearGradient-1)">
          <path d="M597.403777,653.928484 C880.998903,519.629153 1027.4439,424.807739 1036.73876,369.464242 C1074.9724,141.813339 231.978718,254.045613 133.397301,219.490093 C26.6298852,182.065152 0,85 0,85 C0,85 0,349.666667 0,879 L597.403777,653.928484 Z" id="purple" />
        </g>
      </g>
    </Wave>
  </div>
);

const SmallWaveBlock = () => (
  <SmallWave viewBox="0 0 689 160">
    <g className="wave-wrap">
      <path d="M688.14403,157.429408 C603.262302,-4.77348343 0.00345680143,68.7474597 0.00345680143,3.19414244 C0.00345680143,-21.1705546 2.93337344,153.144771 0.00345680143,157.429408 C-1.84954412,160.13919 688.639094,158.37544 688.14403,157.429408 Z" id="Line-Copy" fill="#f5f5f5" transform="translate(344.072015, 79.866326) scale(-1, -1) translate(-344.072015, -79.866326) " />
      <path d="M685.30299,126.973801 C688.489227,126.958644 688.489227,126.131617 685.30299,124.492719 C550.0754,-42.4908307 163.731882,56.6780018 163.731882,2.46363347 C163.731882,-10.969876 163.731882,30.5335131 163.731882,126.973801 C340.775155,127.785671 514.632191,127.785671 685.30299,126.973801 Z" id="Line-Copy-2" fill="#ffffff" transform="translate(425.712275, 63.791352) scale(-1, -1) translate(-425.712275, -63.791352) " />
    </g>
  </SmallWave>
);

const Waves = () => (
  <WaveWrapper>
    <SmallWaveBlock />
    <WaveBlock />
  </WaveWrapper>
);

export default Waves;
