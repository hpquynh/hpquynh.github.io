// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { shake } from '../../styles/keyframes';
import { IconNext } from '../../styles/icons';
import { mediaMax, fontSize, displayFlex } from '../../styles/utils';

const FrameBlock = styled.div`
  width: 300px;
  height: 400px;
  max-width: 100%;
  user-select: none;
  ${displayFlex('column', 'flex-end', 'baseline')}
  position: relative;
  transition: all .3s ease;
  &:after{
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.color.lemon};
    position: absolute;
    z-index: -1;
    width: 0;
    transition: all .7s ease;
  }
 
  ${props => props.isAnimated && css`
   &:hover, &:active, &:focus{
    opacity: 1;
    &:after{
      background-color: ${props.theme.color.snow};
    }
   }
 
    &:after{
      width: 100%;
    }
  `}
  ${mediaMax.sm`
    height: auto;
  `}
 
`;
const CustomLink = styled(Link)`
   ${displayFlex('column', 'space-between', 'baseline')}
   width: 100%;
   height: 100%;
   padding: 20px 15px 15px;
     user-select: none;
    &:hover, &:active, &:focus{
      opacity: 1;
      img{
        mix-blend-mode: darken;
        background-color: ${props => props.theme.color.lemon};
      }
    }
  
    svg{
      transition: all .3s ease;
      animation: ${shake} infinite 5s ease-in-out;
    }
   
`;
const Title = styled.span`
  line-height: 1;
  ${fontSize('45px')}
  color: ${props => props.theme.color.shadow};
   ${mediaMax.sm`
     ${fontSize('32px')}
    `}
`;
const Image = styled.img`
  width: 360px;
  min-height: 198px;
  margin-left: -25px;
  padding: 12px 0 12px 40px;
  mix-blend-mode: luminosity;
  transition: all .8s ease;
  user-select: none;
   ${mediaMax.sm`
      width: 100%;
      height: auto;
      margin-left: 0;
      min-height: auto;
      object-fit: contain;
      object-position: center;
      padding: 12px;
      background: ${props => props.theme.color.snow};
      margin-top: 10px;
  `}
  
`;
const ButtonLink = styled.span`
  padding: 15px 15px 0;
  text-align: right;
  width: 100%;
  ${fontSize('16px')}
`;
const ButtonText = styled.span`
  line-height: 1;
  text-transform: uppercase;
`;

type Props = {
  image: string,
  isAnimated: boolean,
}
export default class WorkFrame extends React.PureComponent<Props> {
  render() {
    const { image, isAnimated } = this.props;
    return (
      <FrameBlock isAnimated={isAnimated}>
        <CustomLink to="/project">
          <Title>heartmade by me</Title>
          <Image src={image} alt="object" />
          <ButtonLink><ButtonText>My works <IconNext /></ButtonText></ButtonLink>
        </CustomLink>
      </FrameBlock>
    );
  }
}
