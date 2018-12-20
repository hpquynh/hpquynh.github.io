// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import CommonComponent from '../common/CommonComponent';
import Gallery from '../common/Gallery';
import {
  displayFlex, fontSize, getCurrentSection, mediaMax,
} from '../../styles/utils';
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
 padding: 0 0 100px 0;
 max-width: 1200px;
 margin: 0 auto;
`;


const Symbol = styled.span`
  color: red;
`;
const ItemContent = css`
  width: 100%;
  height: auto;
  overflow: hidden;
  border: 1px solid ${props => props.theme.color.line};
    background-color: ${props => props.theme.color.white};
   box-shadow: 2px 1px 1px 0px rgba(0,0,0,0.05);
  ${displayFlex('column', 'flex-start', 'flex-start')}
  transition: all .5s ease;
  position: relative;
  border-radius: 5px;
  ${mediaMax.sm`
    width: 100%;
 `}
`;
const Item = styled.div`
  width: calc(100% / 4);
  cursor: pointer;
  padding: 25px;
  box-sizing: border-box;
  ${displayFlex('column', 'flex-start', 'center')}
  
  ${mediaMax.lgMax`
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
   height: auto;
    object-fit: cover;
    object-position: center;
`;
const Info = styled.div`
  width: 100%;
  padding: 10px;
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
const TextBackground = styled.div`
  ${fontSize('40px')}
  position: absolute;
  transform: translate3d(0,-15px,0px);
  color: ${props => props.theme.color.cloud};
  font-weight: 500;
  font-family: ${props => props.theme.font.second};
  top: auto;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 1;
  transition: all .3s;
  text-align: center;
  ${mediaMax.mdMax`
    ${fontSize('30px')}
 `}
  ${mediaMax.sm`
    ${fontSize('25px')}
 `}
`;
const Text = styled.div``;

type Props = {
  projects: [],
  getProjects: () => {},
  match: Object,
}
class ProjectComponent extends React.PureComponent<Props> {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const y = window.scrollY;
    this.setState({
      scrollY: y,
    });
  };

  render() {
    const { scrollY } = this.state;
    const { projects, match } = this.props;
    return (
      <CommonComponent
        sticky
        title="My works"
      >
        <TextBackground style={{ transform: `translate3d(0, -${scrollY / 100 + 15}px, 0px)` }}>
          <Symbol>&#10084;</Symbol>
          <Text>Made by me</Text>
        </TextBackground>
        <ProjectWrapper>
          <ProjectList>
            <Gallery>
              {
                (projects.length > 0)
                  ? projects.map((project: Project) => (
                    <Item key={project.id}>
                      <Link to={`${match.url}/${project.id}`}>
                        <Thumbnail src={project.data.thumbnail} alt="gallery" />
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
