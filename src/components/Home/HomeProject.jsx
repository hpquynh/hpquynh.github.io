// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Container, NavTitle } from '../common/style';
import {
  displayFlex, buttonStyle, mediaMax, fontSize,
} from '../../styles/utils';
import objImg from '../../images/mockup.png';
import WorkFrame from './WorkFrame';
import { fadeIn, kira } from '../../styles/keyframes';
const MainContent = styled.div`
  ${displayFlex('row', 'center', 'center')}
  position: relative;
  height: 100vh;
  ${mediaMax.sm`
    flex-direction: column !important;
  `}
 
  .button{
    text-decoration: none;
  }
`;
const Des = styled.div`
 
`;
const Title = styled.div`
    ${fontSize('26px')}
    display: block;
    font-family: ${props => props.theme.font.second};
    margin: 5px 0;
    padding: 5px;
    font-weight: 400;
    text-transform: capitalize;
    &:nth-of-type(1){
      background-color: ${props => props.theme.color.lemon};
      color: ${props => props.theme.color.grey};
      width: fit-content;
    }
     &:nth-of-type(2){
      background-color: ${props => props.theme.color.sun};
      color: ${props => props.theme.color.grey};
      width: fit-content;
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
  ${mediaMax.sm`
    width: 100%;
    max-width: 100%;
   `}
`;

const ButtonText = styled.span`
  margin-top: 30px;
  ${buttonStyle('#333', '#fff', '18px', '12px 15px 10px')}
  line-height: 1;
  border: 4px solid #bfffff;
  animation: ${kira} 1s ease infinite;
  text-transform: uppercase;
`;

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
              I've worked as a full-time
              {' '}
              <Title>Frontend Developer</Title>
              and a freelance &ensp;
              <Title>UI designer</Title>
for over two years.
            </Des>
            <Link className="button" to="/project"><ButtonText>Take a look at my works</ButtonText></Link>
          </FadeIn>
          <WorkFrame isAnimated={isAnimated} image={objImg} />
        </MainContent>
        <NavTitle title={navTitle}>
          <span title=">">&gt;</span>
          {navTitle}
        </NavTitle>
      </Container>
    );
  }
}
