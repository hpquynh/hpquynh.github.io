// @flow
import React from 'react';
import styled from 'styled-components';
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
   ${mediaMin.mdMin`
      height: 100vh;
      ${displayFlex('row', 'flex-start', 'center')}
      background-color: ${props => props.theme.color.mist};
  `}
   ${mediaMax.sm`
      height: auto;
      ${displayFlex('column', 'flex-start', 'center')}
      background-color: ${props => props.theme.color.white};
  `}
`;
const Content = styled.div`
  ${displayFlex('column', 'flex-start', 'center')}
  height: 100%;
  background-color: ${props => props.theme.color.mist};
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
  width: 70%;
  max-height: 100%;
  height: auto;
  text-align: center;
  object-fit: contain;
  object-position: center;
  transition: opacity .3s ease;
   animation: ${fadeIn} 0.6s forwards ease;
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
  ${displayFlex('column', 'center', 'center')}
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
   ${mediaMax.sm`
      display: none;
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
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({
      currentUrl: e.target.getAttribute('src'),
    });
  }

  render() {
    const { project } = this.props;
    const { currentUrl } = this.state;
    return (
      <CommonComponent sticky={false}>
        <MainContent>
          <Content>
            {/*<TopFixed>*/}
              {/*<Link to="/project">*/}
                {/*<IconBack />*/}
                {/*<span>My works</span>*/}
              {/*</Link>*/}
            {/*</TopFixed>*/}
            <Preview>
              {project ? <PreviewImg src={currentUrl || project.images[0].url} alt="preview" /> : <Loading />}
            </Preview>
          </Content>
          {project ? <DetailInfo handleClick={this.handleClick} project={project} /> : ''}
        </MainContent>
      </CommonComponent>
    );
  }
}

export default ProjectDetailComponent;
