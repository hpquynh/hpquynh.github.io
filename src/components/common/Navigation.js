// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './Logo';
import SocialGroup from './SocialGroup';
import { displayFlex, mediaMax } from '../../styles/utils';

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

type Props = {
  isFinished: boolean,
  sticky: boolean,
  title: string,
}
export default class Navigation extends React.PureComponent<Props> {
  render() {
    const { isFinished, title, sticky } = this.props;
    return (
      <Header sticky={sticky}>
        <Logo isFinished={isFinished} />
        <div>{title}</div>
        <SocialGroup sticky={sticky} isFinished={isFinished} />
      </Header>
    );
  }
}
