// @flow
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { getProjects } from '../../actions/projectAction';
import { selector } from '../../selectors/project';
import { Container } from '../common/style';
import Navigation from '../common/Navigation';
import Gallery from '../common/Gallery';
import { displayFlex, fontSize, mediaMax } from '../../styles/utils';
import bgWork from '../../images/work.svg';
import { Project } from '../../models/project';
import Loading from '../common/Loading';

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
 background-position: center;
 background-size: 416px;
 background-color: ${props => props.theme.color.white};
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
const ItemContent = css`
  width: 85%;
  height: auto;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  ${displayFlex('column', 'flex-start', 'flex-start')}
  transition: all .5s ease;
  position: relative;
  // &:after{
  //   content: '';
  //    background-color: transparent;
  //    transition: all .5s ease;
  // }
  // &:hover{
  //   background-color: ${props => props.theme.color.mist};
  //   overflow: hidden;
  //   &:after{
  //     z-index: 3;
  //     width: 100%;
  //     height: 100%;
  //     position: absolute;
  //     background-color: rgba(255,252,117, .8);
  //   }
  // }
  ${mediaMax.sm`
    width: 100%;
 `}
`;
const Item = styled.div`
  width: calc(100% / 3);
  cursor: pointer;
  padding: 30px 10px 50px;
  box-sizing: border-box;
  ${displayFlex('column', 'flex-start', 'center')}
  
 ${mediaMax.sm`
    width: 100%;
    padding: 20px 10px;
 `}
  a{
    ${ItemContent};
 
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  min-height: 200px;
  background-color: ${props => props.theme.color.mist};
   border-radius: 5px;
   height: auto;
    object-fit: cover;
    object-position: center;
`;
const Info = styled.div`
  width: 100%;
  padding: 10px;
`;
const Name = styled.div`
 font-family: ${props => props.theme.font.main};
 ${fontSize('28px')}
`;
const SubDes = styled.p`
 font-family: ${props => props.theme.font.second};
 ${fontSize('14px')}
 font-weight: 400;
 margin: 0;
`;
type Props = {
  projects: [],
  getProjects: () => {},
  match: Object,
}
class ProjectComponent extends React.PureComponent<Props> {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects, match } = this.props;
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

          {
              (!this.props || projects === undefined) ? <Loading />
                : (
                  <ProjectList>
                    <Gallery>
                      {
                projects.map((project: Project) => (
                  <Item key={project.id}>
                    <Link to={`${match.url}/${project.id}`}>
                      <Thumbnail src={project.data.thumbnailUrl} alt="gallery" />
                      <Info>
                        <Name>{project.data.name}</Name>
                        <SubDes>{project.data.description}</SubDes>
                      </Info>
                    </Link>
                  </Item>
                ))
              }
                    </Gallery>
                  </ProjectList>
                )
            }

        </ProjectWrapper>
      </Container>
    );
  }
}

export default compose(
  withRouter,
  connect(selector, { getProjects }),
)(ProjectComponent);
