// @flow
import React from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import { displayFlex, mediaMax } from '../../styles/utils';
import { fadeIn } from '../../styles/keyframes';
import type { Project } from '../../models/project';

const Preview = styled.div`
  ${displayFlex('column', 'flex-start', 'center')}
  width: 100%;
  height: 100%;
  padding: 0;
  margin-bottom: 15px;
   ${mediaMax.sm`
      display: none;
  `}
`;
const PreviewImg = styled.img`
  width: auto;
  max-width: 80%;
  max-height: calc(100% - 40px);
  height: auto;
  text-align: center;
  object-fit: contain;
  object-position: center;
  animation: ${fadeIn} 0.6s forwards ease;
  border: 1px solid ${props => props.theme.color.line};
  box-shadow: 2px 1px 1px 0px rgba(0,0,0,0.05);
  transition: all .3s ease;
`;
const Description = styled.div`
  ${ellipsis('100%')};
  padding: 0 10px 10px;
  font-weight: 500;
  font-family: ${props => props.theme.font.second};
  color: ${props => props.theme.color.white};
`;

type Props = {
  description: string,
  url: string,
  project: Project,
}

export default class ProjectPreview extends React.PureComponent<Props> {
  render() {
    const { description, url, project } = this.props;
    return (
      <Preview>
        <Description>{description || project.images[0].description}</Description>
        <PreviewImg src={url || project.images[0].url} alt="preview" />
      </Preview>
    );
  }
}
