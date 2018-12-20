// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  displayFlex, fontSize,
} from '../../styles/utils';
import type { Project } from '../../models/project';

const ProjectLink = styled(Link)`
  ${displayFlex('column', 'flex-start', 'flex-start')}
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.1);
  background-color: ${props => props.theme.color.white};
  box-shadow: 2px 1px 20px 0px rgba(0,0,0,0.1);
  transition: all .5s ease;
  position: relative;
  border-radius: 15px;

`;
const ThumbnailWrapper = styled.div`
   border-top: 1px solid ${props => props.theme.color.line};
   width: 100%;
   min-height: 200px;
`;
const Thumbnail = styled.img`
   width: 100%;
   min-height: 100%;
   height: auto;
    object-fit: cover;
    object-position: center;
`;
const Info = styled.div`
  width: 100%;
  padding: 10px;
  border-top: 3px solid ${props => props.theme.color.lemon};
`;
const Name = styled.div`
 font-family: ${props => props.theme.font.second};
 ${fontSize('16px')}
 font-weight: 500;
`;
const SubDes = styled.p`
 font-family: ${props => props.theme.font.second};
 ${fontSize('13px')}
 font-weight: 400;
 margin: 0;
`;

type Props = {
  url: string,
  project: Project,
}

export default class ProjectItem extends React.PureComponent<Props> {
  render() {
    const { url, project } = this.props;
    return (
      <ProjectLink to={`${url}/${project.id}`}>
        <Info>
          <Name>{project.data.name}</Name>
          <SubDes>{project.data.description}</SubDes>
        </Info>
        <ThumbnailWrapper>
          <Thumbnail src={project.data.thumbnail} alt="gallery" />
        </ThumbnailWrapper>
      </ProjectLink>
    );
  }
}
