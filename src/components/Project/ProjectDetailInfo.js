// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import { Project } from '../../models/project';
import {
  displayFlex, fontSize, mediaMin, mediaMax,
} from '../../styles/utils';
import { IconMobile, IconPc } from '../../styles/icons';
import { slideInRight } from '../../styles/keyframes';

const Detail = styled.div`
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  transition: padding .7s ease;
  ${mediaMin.lgMin`
     animation: ${slideInRight} 0.5s forwards ease;
  `}
   ${mediaMin.mdMin`
        color: white;
       width: 35%;
       padding: 71px 30px 30px;
       &:before{
        content: '';
        z-index: -1;
        position: absolute; top: 0; left: -30px; right: 0; bottom: 0;
        background-color: ${props => props.theme.color.darker};
        transform: translate3d(24px,0px,41px) skew(-3deg,0);
        outline: 1px solid transparent;
        box-shadow: 0 0 1px rgba(255,255,255,0);
        -webkit-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
         -webkit-perspective: 1000;
      transition: all .7s ease;
    }
       &:hover{
        &:before{
          transform: translate3d(0px,0px,0px) skew(0,0);
        }
        padding-left: 15px;
       }
  `}
   ${mediaMax.sm`
     width: 100%;
     color: ${props => props.theme.color.grey};
     padding: 15px;
    
  `}
`;
const Title = styled.h1`
  ${fontSize('24px')}
  margin: 0 0 5px 0;
  padding: 0;
  font-weight: 500;
  text-align: center;
`;
const Description = styled.p`
  ${fontSize('14px')}
  margin: 5px 0 0 0;
  font-family: ${props => props.theme.font.second};
  font-weight: 400;
`;
const InfoGroup = styled.div`
  text-align: center;
   ${displayFlex('column wrap', 'center', 'center')}
  
`;
const Environments = styled.span`
  text-align: center;
  svg{
   margin: 0 5px;
  }
`;
const Sources = styled.span`
 ${fontSize('14px')}
 span{
    &:not(:first-of-type){
      &:before{
        content: '|';
        
      }
    }
  }
`;
const Links = styled.ul`
  padding-left: 10px;
  a{
    text-decoration: underline;
  }
`;
const GridContainer = styled.div`
  display: grid;
  grid-gap: 10px;
   ${mediaMin.xl`
      grid-template-columns: 1fr 1fr 1fr;
      
  `}
   ${mediaMax.xlMax`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
  `}
   ${mediaMax.mdMax`
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
  `}
  ${mediaMax.sm`
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
  `}
`;
const Grid = styled.div`
  
  transition: all .3s ease;
   ${mediaMin.lgMin`
      height: 120px;
      cursor: pointer;
  `}
   ${mediaMax.mdMax`
      height: 120px;
      cursor: pointer;
  `}
  ${mediaMax.sm`
      height: auto;
      width: 100%;
      pointer-events: none;
  `}
`;
const GridImage = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.color.mist};
  background-color: ${props => props.theme.color.mist};
  object-fit: contain;
  object-position: center;
  filter: grayscale(90%);
  transition: filter .3s ease;
  user-select: none;
  &:hover, &:active, &:focus{
    filter: none;
  }
   ${mediaMax.sm`
     filter: none;
  `}
`;

type Props = {
  project: Project,
  handleClick: Function,
}

class ProjectDetailComponent extends React.PureComponent<Props> {
  render() {
    const { project, handleClick } = this.props;
    return (
      <Detail>
        <Title>{project.name}</Title>
        <InfoGroup>
          <Environments>
            {
              project.environments.map((en) => {
                if (en === 'pc') {
                  return <IconPc key={en} />;
                } if (en === 'mobile') {
                  return <IconMobile key={en} />;
                }
                return null;
              })
            }
          </Environments>
          <Sources>
            {
              project.sources.map(source => (
                <span key={source}>{_.capitalize(source)}</span> || null
              ))
            }
          </Sources>
        </InfoGroup>
        <Description>{project.description}</Description>
        <Links>
          {
            project.links ? project.links.map(link => <li key={link}><Link target="_blank" to={`//${link}`}>{link}</Link></li> || null) : ''
          }
        </Links>
        <GridContainer>
          {
            project.images.map((image, index) => (
              <Grid key={index}>
                <GridImage onClick={handleClick} src={image.url} alt={image.description} />
              </Grid> || null))
          }
        </GridContainer>
      </Detail>
    );
  }
}

export default ProjectDetailComponent;
