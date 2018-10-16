
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SocialGroup from './SocialGroup';
type Props = {
  isFinished: boolean,
}
export default class Navigation extends React.PureComponent<Props>  {
  render() {
    const { isFinished } = this.props;
    console.log(isFinished);
    return (
      <Header>
        <Logo />
        <SocialGroup isFinished={isFinished} />
      </Header>
    );
  }
}
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
 
`;
