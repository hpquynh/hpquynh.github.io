/* eslint-disable no-plusplus,no-bitwise */
import styled, { css } from 'styled-components';
import {
  twinkle, blurFadeIn, fadeInRotate,
} from '../../styles/keyframes';

const strBeforeHover = 'Click here ↆ';
const strAfterHover = 'HOME';

const randomStar = () => {
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

export const SplashSection = styled.section`
  background-image: linear-gradient(to top, ${props => props.theme.color.dark} 0%, ${props => props.theme.color.darker} 100%);

  background-attachment:fixed;
  transition: background .2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const LogoButton = styled.a`
  background: transparent;
  border: 0;
  outline: 0;
  display: block;
`;
export const Background = styled.span`
  position: absolute;
  animation: ${twinkle} 10s infinite;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: 0 0 15vh ${props => props.theme.color.moon}, inset 0 0 5vh ${props => props.theme.color.sun};
`;

export const ChildStyle = css`
   cursor: pointer;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: inline-block;
    border-width: 50px;
    border-style: solid;
    position: absolute;
`;

export const Child1 = styled.span`
  ${ChildStyle}
  border-left-color: ${props => props.theme.color.altermoon};
  border-right-color: ${props => props.theme.color.sun};
  border-bottom-color: ${props => props.theme.color.sun};
  border-top-color: ${props => props.theme.color.sun};
  transition:.9s;
  &:before{
    content: "";
    position: absolute;
    width: 25px;
    height: 108px;
    top: 45px;
    border-left: 25px solid ${props => props.theme.color.moon};
    left: 75px;
    background-color: ${props => props.theme.color.sun};
    transform:rotate(-45deg);
    pointer-events: none;
  }
  &:after{
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: transparent;
    border: 5px solid transparent;
    top:-5px;
    left:-5px;
    transition: .9s;
  }
`;

export const Child2 = styled.span`
  ${ChildStyle}
  border-left-color: ${props => props.theme.color.altermoon};
  border-right-color: transparent;
  border-bottom-color: ${props => props.theme.color.moon};
  border-top-color:transparent;
  transition:.5s;
`;
export const Logo = styled.span`
  display: block;
  position: relative;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-sizing: content-box;
  animation: ${fadeInRotate} 1s linear 16s backwards;
  animation-delay: 2s;
  &:after{
    content: '${strBeforeHover}';
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    color: ${props => props.theme.color.white};
    font-size: 1rem;
    text-align: center;
    animation: ${blurFadeIn} 4s infinite;
    animation-delay: 4s;
    opacity: 0;
    transition: top .5s ease;
  }
  &:hover{
    &:after{
      top: -80px;
    }
  }
  &:hover ${Background} {
    box-shadow: none;
    transition: box-shadow .3s;
  }
  &:hover ${Child1} {
    transform:rotate(-90deg);
    border-color: transparent;
    &:before{
      opacity: 0;
      border-color: ${props => props.theme.color.sun};
      transition: opacity .9s, rotate .2s;
    }
    &:after{
      transform:rotate(90deg);
      content: '${strAfterHover}';
      left: -62px;
      top: -21px;
      font-size: 2.5rem;
      color: white;
    }
  }
  &:hover ${Child2} {
    transform:rotate(135deg);
    border-radius: 0;
  }
`;
export const Stars = styled.span`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
`;
export const Star = styled.span`
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);;
  box-shadow: 0 0 1px 1px white;
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: 0;
  opacity: .5;
  animation: ${twinkle} 20s infinite;
  border-radius: 50%;
  ${randomStar()}
`;
