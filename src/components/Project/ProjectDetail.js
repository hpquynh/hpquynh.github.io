// @flow
import React from 'react';
import styled from 'styled-components';
import { ellipsis } from 'polished';
import { Project } from '../../models/project';
import { displayFlex, mediaMin, mediaMax } from '../../styles/utils';
import CommonComponent from '../common/CommonComponent';
import DetailInfo from './ProjectDetailInfo';
import { fadeIn } from '../../styles/keyframes';
import Loading from '../common/Loading';

const MainContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  z-index: 1;
    background-color: ${props => props.theme.color.white};
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
        background-position: center;
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
const PreviewImg = styled.img`
  width: auto;
  max-width: 80%;
  max-height: calc(100% - 40px);
  height: auto;
  text-align: center;
  object-fit: contain;
  object-position: center;
  transition: opacity .3s ease;
   animation: ${fadeIn} 0.6s forwards ease;
    border: 1px solid ${props => props.theme.color.line};
   box-shadow: 2px 1px 1px 0px rgba(0,0,0,0.05);
`;
// const TopFixed = styled.div`
//   z-index: 1;
//   width: 100%;
//   a{
//      ${displayFlex('row', 'flex-start', 'center')}
//       padding: 15px;
//      span{
//       margin-left: 10px;
//      }
//   }
// `;
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
const Description = styled.div`
  ${ellipsis('100%')};
  padding: 0 10px 10px;
  font-weight: 500;
  font-family: ${props => props.theme.font.second};
  color: ${props => props.theme.color.white};
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
                  <Preview>
                    <Description>{currentDes || project.images[0].description}</Description>
                    <PreviewImg src={currentUrl || project.images[0].url} alt="preview" />
                  </Preview>
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
