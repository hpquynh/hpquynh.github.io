// @flow
import React from 'react';
import styled from 'styled-components';
import { Container } from '../common/style';
import { displayFlex, fontSize } from '../../styles/utils';
import ProjectEditorForm from './ProjectEditorForm';

const MainContent = styled.div`
  ${displayFlex('column', 'center', 'flex-start')}
  position: relative;
  margin: auto;
  width: 400px;
  max-width: 100%;
  padding-top: 30px;
`;
const Title = styled.h1`
  ${fontSize('24px')}
  margin: 0 0 5px 0;
  padding: 0;
  font-weight: 500;
  text-align: center;
`;

type Props = {

}

export default class ProjectEditor extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      properties: {
        environments: ['Pc', 'Mobile'],
        sources: ['Product', 'Company', 'Freelance'],
        types: ['Frontend', 'UI'],
      },
    };
  }

  render() {
    const { properties } = this.state;
    return (
      <Container>
        <MainContent>
          <Title>Create new project</Title>
          <ProjectEditorForm properties={properties} />
        </MainContent>
      </Container>
    );
  }
}
