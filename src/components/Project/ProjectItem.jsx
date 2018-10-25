// @flow
import React from 'react';
import { Project } from '../../models/project';
import { IMAGE_DIR } from '../../vars/constants';

// import styled from 'styled-components';


type Props = {
  project: Project,
}

export default class ProjectItem extends React.PureComponent<Props> {
  render() {
    const { project } = this.props;
    return (
      <div>
        <div>{project.data.name}</div>
        <div>{project.data.description}</div>
        <img src={`${IMAGE_DIR}/${project.data.thumbnailUrl}`} alt={project.data.name} />
      </div>
    );
  }
}
