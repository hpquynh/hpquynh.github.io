// @flow
import React from 'react';
import styled from 'styled-components';
import CommonComponent from '../common/CommonComponent';
import Gallery from '../common/Gallery';
import {
  displayFlex, fontSize, mediaMax,
} from '../../styles/utils';
import ProjectItem from './ProjectItem';
import type { Project } from '../../models/project';

const ProjectWrapper = styled.div`
 position: relative;
 ${displayFlex('column wrap', 'flex-start', 'flex-start')}
 padding: 0;
 margin: 0;
 width: 100%;
 min-height: 100vh;
 height: auto;

`;

const ProjectList = styled.div`
 display: block;
 width: 100%;
 height: 100%;
 padding: 0 0 60px 0;
 max-width: 1200px;
 margin: 0 auto;
`;

const ItemWrapper = styled.div`
  width: calc(100% / 3);
  cursor: pointer;
  padding: 40px;
  box-sizing: border-box;
  ${displayFlex('column', 'flex-start', 'center')}
  
  ${mediaMax.xlMax`
    width: calc(100% / 3);
    padding: 30px;
 `}
  ${mediaMax.lgMax`
    width: calc(100% / 2);
    padding: 25px;
 `}
 ${mediaMax.sm`
    width: 100%;
    padding: 20px 15px;
 `}
`;

const TextBackground = styled.div`
  ${fontSize('20px')}
  position: absolute;
  color: ${props => props.theme.color.cloud};
  font-weight: 500;
  font-family: ${props => props.theme.font.second};
  top: auto;
  bottom: 15px;
  left: 0;
  right: 0;
  line-height: 1;
  transition: all .3s;
  text-align: center;
  ${mediaMax.mdMax`
    ${fontSize('18px')}
 `}
  ${mediaMax.sm`
    ${fontSize('14px')}
 `}
`;
const Symbol = styled.span`
  color: red;
`;
const Text = styled.div``;

type Props = {
  projects: Array<Project>,
  match: Object,
}
class ProjectComponent extends React.PureComponent<Props> {
  render() {
    const { projects, match } = this.props;
    return (
      <CommonComponent
        sticky
        title="My works"
      >
        <TextBackground>
          <Symbol>&#10084;</Symbol>
          <Text>Made by me</Text>
        </TextBackground>
        <ProjectWrapper>
          <ProjectList>
            <Gallery>
              {
                (projects.length > 0)
                  ? projects.map((project: Project) => (
                    <ItemWrapper key={project.id}>
                      <ProjectItem project={project} url={match.url} />
                    </ItemWrapper>
                  )) : ''
              }
            </Gallery>
          </ProjectList>
        </ProjectWrapper>
      </CommonComponent>
    );
  }
}

export default ProjectComponent;
