// @flow
import React from 'react';
import styled from 'styled-components';
import {
  ColorfulText, Container, FlexColumn, TextRight, NavTitle,
} from '../common/style';
import AvatarBlock from './AvatarBlock';
import { fadeIn } from '../../styles/keyframes';
import Bubble from '../common/Bubble';
import avtImg from '../../images/avatar.png';
import { displayFlex, mediaMax, fontSize } from '../../styles/utils';


const MainContent = styled.div`
  ${displayFlex('row', 'center', 'center')}
  animation: ${fadeIn} 1s ease;
  position: relative;
  height: 100%;
  width: 100%;
  margin: auto;
  padding: 0 15px;
   ${mediaMax.md`
    flex-direction: column !important;
  `}
`;
const FlexWrapper = styled.div`
  display: flex;
  height: 100vh;
  * {
    z-index: 2;
  }
`;


const Name = styled.h1`
  text-transform: uppercase;
  text-align: right;
  // text-shadow: -1px -1px 0 ${props => props.theme.color.moon}, 1px -1px 0 ${props => props.theme.color.moon}, -1px 1px 0 ${props => props.theme.color.moon}, 1px 1px 0 ${props => props.theme.color.moon};
  ${fontSize('75px')}
  font-family: ${props => props.theme.font.second};
  position: relative;
  margin: 20px 0 0 0;
  transition: all .4s ease;
  letter-spacing: 6px;
  line-height: 1.2;
  ${ColorfulText}
  &:after {
    content: 'Quynh HP.';
    transform: translate(0.4vw, 0.3vh);
    will-change: transform;
    text-align: right;
    width: 100%;
    left: 0;
    top: 0;
  }
   ${mediaMax.sm`
     ${fontSize('55px')}
   `}
`;
const TextBackground = styled.span`
  ${fontSize('100px')}
  position: absolute;
  transform: rotate(-90deg) translate3d(0px, -140px, 0px);
  color: ${props => props.theme.color.snow};
  font-weight: 500;
  font-family: ${props => props.theme.font.second};
  top: 60%;
  transition: all .3s;
`;
const BubbleWrapper = styled.span`
  position: absolute;
  left: 0;
  width: 50vw;
  top: calc(50vh - 25vw);
  transform: translate3d(140px, 100px, 100px);
  transition: all .3s;
  svg{
    height: auto;
     width: 100%;
  }
  ${mediaMax.sm`
     width: 90vw;
   `}
`;
type Props = {
  navTitle: string,
  scrollY: number,
}
export default class HomeTop extends React.PureComponent<Props> {
  render() {
    const { navTitle, scrollY } = this.props;
    return (
      <Container>
        <FlexWrapper>
          <MainContent>
            <AvatarBlock image={avtImg} />
            <FlexColumn className="p-l-20">
              <Name>Quynh HP.</Name>
              <TextRight>A Frontend developer - A UX/UI designer - A Dreamer</TextRight>
              <TextRight>Not unique . Just different</TextRight>
              <TextRight>Danang, VN</TextRight>
            </FlexColumn>
          </MainContent>
        </FlexWrapper>
        <TextBackground style={{ transform: `rotate(-90deg) translate3d(${scrollY}px, -140px, 0px)` }}>Portfolio</TextBackground>
        <NavTitle title={navTitle}>
          <span title=">">&gt;</span>
          {navTitle}
        </NavTitle>
        <BubbleWrapper style={{ transform: `translate3d(140px, ${-scrollY / 4 + 100}px, 0px)` }}>
          <Bubble />
        </BubbleWrapper>
      </Container>
    );
  }
}
