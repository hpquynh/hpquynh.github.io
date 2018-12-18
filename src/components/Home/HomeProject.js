// @flow
import React from 'react';
import styled from 'styled-components';
import { Container, NavTitle } from '../common/style';
import {
  displayFlex, mediaMax, fontSize,
} from '../../styles/utils';
import { changeHeight } from '../../styles/keyframes';
import objImg from '../../images/mockup.png';
import WorkFrame from './WorkFrame';

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
  &:before{
    content: '';
    position: absolute;
    top: 0;
    height: 60px;
    width: 1px;
    background-color: #333;
    border-right: 1px solid ${props => props.theme.color.lemon};
    animation ${changeHeight} 1.5s infinite ease;
    transition: height .3s ease;
  }
`;
const Des = styled.div`
 
`;
const Title = styled.span`
    ${fontSize('26px')}
    display: inline-block;
    font-family: ${props => props.theme.font.second};
    margin: 5px 0;
    padding: 5px;
    font-weight: 400;
    text-transform: capitalize;
    background-color: ${props => props.theme.color.snow};
    color: ${props => props.theme.color.grey};
    width: fit-content;
    line-height: 1;
    ${mediaMax.sm`
      ${fontSize('20px')}
      font-weight: 500;
   `}
`;
const FadeIn = styled.div`
  ${displayFlex('column', 'flex-start', 'flex-start')}
  opacity: 1;
  flex-wrap: wrap;
  max-width: 35%;
  letter-spacing: initial;
  padding: 0 30px;
  margin-bottom: 1.5rem;
  ${mediaMax.sm`
    width: 100%;
    max-width: 100%;
    margin-bottom: 1.2rem;
   `}
`;


type Props = {
  navTitle: string,
  isAnimated: boolean,
}
export default class HomeProject extends React.PureComponent<Props> {
  render() {
    const { navTitle, isAnimated } = this.props;
    return (
      <Container>
        <MainContent>
          <FadeIn>
            <Des>
              I've worked as a full-time <Title>Frontend Developer</Title>
            </Des>
            <Des>
              and a freelance <Title>UI designer</Title> for over two years.
            </Des>
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
