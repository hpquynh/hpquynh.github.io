// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from './style';
import Navigation from './Navigation';

const GridContainer = styled(Container)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: 
   "sidebar"
   "main"
`;

const Main = styled.div`
  grid-area: main;
`;
type Props = {
  children: React.Node,
  title: React.Node,
  sticky: boolean,
  light: boolean,
}

export default class CommonComponent extends React.PureComponent<Props> {
  render() {
    const {
      children, title, sticky,
      light,
    } = this.props;
    return (
      <GridContainer>
        <Navigation light={light} sticky={sticky} title={title} />
        <Main>
          { children }
        </Main>
      </GridContainer>
    );
  }
}
