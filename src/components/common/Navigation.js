// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';
import Logo from './Logo';
import SocialGroup from './SocialGroup';
import { displayFlex, fontSize, mediaMax } from '../../styles/utils';

const Header = styled.header`
  padding: 0 15px;
  height: 54px;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
  will-change: transform;
  grid-area: sidebar;
  ${displayFlex('row', 'space-between', 'center')}
  ${props => !props.sticky && css`
     position: fixed;
  `}
 
  ${props => props.sticky && css`
     position: sticky;
     background-color: ${props.theme.color.white};
  `}
  ${mediaMax.sm`
    background-color: ${props => props.theme.color.white};
  
  `}
`;
const Row = styled.div`
  ${displayFlex('row', 'flex-start', 'center')}
  min-width: 50%;
`;
const TitleBlock = styled.div`
  padding: 0 10px;
  width: 100%;
`;
const Title = styled.h1`
  ${fontSize('20px')}
  margin: 0;
  font-weight: 400;
  transition: font-size .3s ease;
  ${ellipsis('80%')}
  font-family: ${props => props.theme.font.second};
  font-style: italic;
  line-height: 1;
  border-bottom: 3px solid ${props => props.theme.color.moon};
   ${props => props.light && css`
     color: ${props.theme.color.white};
  `}
   ${mediaMax.sm`
    ${fontSize('18px')}
     ${props => props.light && css`
     color: ${props.theme.color.grey};
    `}
  `}
`;
type Props = {
  isFinished: boolean,
  sticky: boolean,
  light: boolean,
  title: string,
}
export default class Navigation extends React.PureComponent<Props> {
  render() {
    const {
      isFinished, title, sticky,
      light,
    } = this.props;
    return (
      <Header sticky={sticky}>
        <Row>
          <Logo isFinished={isFinished} />
          <TitleBlock><Title light={light}>{title}</Title></TitleBlock>
        </Row>
        <SocialGroup sticky={sticky} isFinished={isFinished} />
      </Header>
    );
  }
}
