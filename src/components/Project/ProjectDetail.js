// @flow
import React from 'react';
import styled from 'styled-components';
import type { Project } from '../../models/project';
import { displayFlex, mediaMin, mediaMax } from '../../styles/utils';
import CommonComponent from '../common/CommonComponent';
import DetailInfo from './ProjectDetailInfo';
import ProjectPreview from './ProjectPreview';

const MainContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;
    background-color: #fafafa;
   ${mediaMin.mdMin`
      height: 100vh;
      ${displayFlex('row', 'flex-start', 'center')}
      &:before{
        content: '';
        position: absolute;
        left: 0; right: 0; bottom: 0; top: 0;
        width: 100%;
        height: 100%;
        filter: blur(1.5px);
        background-image: url(${props => props.bg});
        background-color: rgba(0,0,0,.69);
        background-blend-mode: multiply;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: top;
        transition: all .3s ease;
       
      }
  `}
   ${mediaMax.sm`
      height: auto;
      ${displayFlex('column', 'flex-start', 'center')}
     
  `}
`;
const Content = styled.div`
  ${displayFlex('column', 'flex-start', 'center')}
  height: 100%;
  // background-color: ${props => props.theme.color.mist};
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 54px;
   ${mediaMin.mdMin`
       width: 65%;
  `}
   ${mediaMax.sm`
      width: 100%;
      background-color: ${props => props.theme.color.white};
  `}
`;

type Props = {
  project: Project,
}

class ProjectDetailComponent extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: '',
      currentDes: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      currentUrl: e.target.getAttribute('src'),
      currentDes: e.target.getAttribute('alt'),
    });
  }

  render() {
    const { project } = this.props;
    const { currentUrl, currentDes } = this.state;
    return (
      <CommonComponent light sticky={false} title={project ? project.name : ''}>
        <MainContent bg={project ? currentUrl || project.images[0].url : ''}>
          <Content>
            {
              project
                ? (
                  <ProjectPreview description={currentDes} url={currentUrl} project={project} />
                )
                : ''
            }
          </Content>
          <DetailInfo handleClick={this.handleClick} project={project || ''} />
        </MainContent>
      </CommonComponent>
    );
  }
}

export default ProjectDetailComponent;
