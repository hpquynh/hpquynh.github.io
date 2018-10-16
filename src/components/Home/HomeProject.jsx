// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Container, NavTitle, MobileMainContent } from './style';
import { displayFlex, buttonStyle } from '../../styles/utils';
import objImg from '../../images/mockup.png';
import WorkFrame from './WorkFrame';
import { fadeIn, kira } from '../../styles/keyframes';

type Props = {
  navTitle: string,
  isAnimated: boolean
}
export default class HomeProject extends React.PureComponent<Props> {
  render() {
    const { navTitle, isAnimated } = this.props;
    return (
      <Container>
        <MainContent>
          <FadeIn isAnimated={isAnimated}>
            <Des>
              I've worked as a full-time <Title>Frontend Developer</Title>
              and a freelance &ensp;<Title>UI designer</Title>for over two years.
            </Des>
            <Button>Take a look at my works</Button>
          </FadeIn>
          <WorkFrame isAnimated={isAnimated} image={objImg} />
        </MainContent>
        <NavTitle title={navTitle}>{navTitle}</NavTitle>
      </Container>
    );
  }
}
const MainContent = styled.div`
  ${displayFlex('row', 'center', 'center')}
  position: relative;
  padding: 15px;
  ${MobileMainContent}
`;
const Des = styled.div`
 
`;
const Title = styled.div`
    font-size: 28px;
    display: block;
    font-family: ${props => props.theme.font.second};
    text-transform: uppercase;
     margin: 5px 0;
    padding: 5px;
    font-weight: 400;
    &:nth-of-type(1){
      background-color: ${props => props.theme.color.lemon};
    }
     &:nth-of-type(2){
      background-color: ${props => props.theme.color.sun};
    }
`;
const FadeIn = styled.div`
  ${displayFlex('column', 'flex-start', 'flex-start')}
  opacity: 0;
  flex-wrap: wrap;
  max-width: 30%;
  letter-spacing: initial;
  ${props => props.isAnimated && css`
    animation: ${fadeIn} 6s ease;
    opacity: 1;
  `}
`;
const Button = styled.a`
  margin-top: 30px;
  ${buttonStyle('#3c3737', '#fff', '14px', '12px 10px 10px')}
  line-height: 1;
  border: 3px solid #bfffff;
  animation: ${kira} 1s ease infinite;
`;

