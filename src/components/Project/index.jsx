// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import { getProjects } from '../../actions/projectAction';
import { selector } from '../../selectors/project';
import { Container } from '../common/style';
// import { ProjectList } from './style';
import Navigation from '../common/Navigation';
import Gallery from '../common/Gallery';
import { displayFlex, fontSize, mediaMax } from '../../styles/utils';
import bgWork from '../../images/work.svg';

const ProjectWrapper = styled.div`
 position: relative;
 ${displayFlex('column wrap', 'flex-start', 'flex-start')}
 padding: 71px 60px 30px;
 margin: 0 auto;
 min-height: 100vh;
 height: auto;
  ${mediaMax.sm`
    padding: 71px 30px;
 `}
`;
const ProjectHeader = styled.div`
 ${displayFlex('column wrap', 'center', 'center')}
 width: 100%;
 height: 300px;
 background: url(${props => props.background}) no-repeat;
 background-position: -20px 0;
 background-size: 550px;
 background-color: ${props => props.theme.color.mist};
 ${mediaMax.sm`
  height: 200px;
 `}
`;
const ProjectList = styled.div`
 display: block;
 width: 100%;
 height: 100%;
 padding: 30px 0;
`;
const Title = styled.h1`
  ${fontSize('40px')}
  background-color: ${props => props.theme.color.lemon};
  padding: 10px 30px;
  width: fit-content;
  margin: 0 0 10px 0;
  vertical-align: middle;
  line-height: 2.5rem;
`;
const Des = styled.p`
   margin: 0;
   ${fontSize('16px')}
   background-color: white;
   padding: 5px 10px;
   width: fit-content;
`;

const Symbol = styled.span`
  color: red;
`;
type Props = {
  projects: [],
  getProjects: () => {},
}
class ProjectComponent extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props;
    return (
      <Container>
        <Navigation />
        <ProjectWrapper>
          <ProjectHeader background={bgWork}>
            <Title>My Works</Title>
            <Des>
              <Symbol>&#10084;</Symbol>
              <span> made by me</span>
            </Des>
          </ProjectHeader>
          <ProjectList>
            <Gallery elements={projects} />
          </ProjectList>
        </ProjectWrapper>
      </Container>
    );
  }
}

export default withRouter(connect(selector, {
  getProjects,
})(ProjectComponent));
