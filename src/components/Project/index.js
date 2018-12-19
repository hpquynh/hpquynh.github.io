// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import CommonComponent from '../common/CommonComponent';
import Gallery from '../common/Gallery';
import { displayFlex, fontSize, mediaMax } from '../../styles/utils';
import { Project } from '../../models/project';

const ProjectWrapper = styled.div`
 position: relative;
 ${displayFlex('column wrap', 'flex-start', 'flex-start')}
 padding: 0;
 margin: 0;
 width: 100%;
 min-height: 100vh;
 height: auto;
  ${mediaMax.sm`
   
 `}
`;

const ProjectList = styled.div`
 display: block;
 width: 100%;
 height: 100%;
 padding: 0;
 max-width: 1400px;
 margin: 0 auto;
`;
const Title = styled.h1`
  ${fontSize('25px')}
  margin: 0;
  font-weight: 400;
   ${mediaMax.sm`
    display: none;
 `}
`;
const Text = styled.span`

`;
const Symbol = styled.span`
  color: red;
`;
const ItemContent = css`
  width: 100%;
  height: auto;
  overflow: hidden;
  ${displayFlex('column', 'flex-start', 'flex-start')}
  transition: all .5s ease;
  position: relative;
 
  ${mediaMax.sm`
    width: 100%;
 `}
`;
const Item = styled.div`
  width: calc(100% / 4);
  cursor: pointer;
  padding: 15px;
  box-sizing: border-box;
  ${displayFlex('column', 'flex-start', 'center')}
  
  ${mediaMax.md`
    width: calc(100% / 3);
    padding: 15px;
 `}
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
  render() {
    const { projects, match } = this.props;
    return (
      <CommonComponent
        sticky
        title={(
          <Title>
            <Symbol>&#10084;</Symbol>
            <Text> made by me</Text>
          </Title>
        )}
      >
        <ProjectWrapper>
          <ProjectList>
            <Gallery>
              {
                (projects.length > 0)
                  ? projects.map((project: Project) => (
                    <Item key={project.id}>
                      <Link to={`${match.url}/${project.id}`}>
                        <Thumbnail src={project.data.thumbnailUrl} alt="gallery" />
                        <Info>
                          <Name>{project.data.name}</Name>
                          <SubDes>{project.data.description}</SubDes>
                        </Info>
                      </Link>
                    </Item>
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
