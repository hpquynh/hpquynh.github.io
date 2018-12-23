// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { ellipsis } from 'polished';
import styled from 'styled-components';
import type { Project } from '../../models/project';
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
   font-family: ${props => props.theme.font.second};
   font-weight: 400;
  ${mediaMin.lgMin`
     animation: ${slideInRight} 0.5s forwards ease;
  `}
   ${mediaMin.mdMin`
        color: ${props => props.theme.color.grey};
       width: 35%;
       padding: 60px 30px 30px;
       &:before{
        content: '';
        z-index: -1;
        position: absolute; top: 0; left: -30px; right: 0; bottom: 0;
        background-color: ${props => props.theme.color.white};
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
  ${fontSize('20px')}
  margin: 0;
  padding: 0;
  font-weight: 500;
`;
const Description = styled.p`
  ${fontSize('14px')}
  margin: 0;
  font-weight: 400;
`;
const InfoGroup = styled.div`
  text-align: left;
  padding: 0;
   ${displayFlex('column wrap', 'center', 'flex-start')}
  
`;
const Environments = styled.span`
  text-align: left;
  line-height: 1.6;
  svg{
   margin: 0 5px;
   vertical-align: middle;
  }
`;
const Types = styled.span`
  line-height: 1.6;
  span{
    &:not(:first-child){
      &:before{
        content: ' | ';
      }
    }
  }
`;
// const Sources = styled.span`
//  ${fontSize('14px')}
//  span{
//     &:not(:first-of-type){
//       &:before{
//         content: '|';
//       }
//     }
//   }
// `;
const Links = styled.ul`
  padding-left: 15px;
  margin: 10px 0;
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
  ${mediaMax.sm`
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
       grid-gap: 30px;
      border-top: 1px solid ${props => props.theme.color.line};
      padding-top: 20px;
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
   box-shadow: 2px 1px 1px 0px rgba(0,0,0,0.05);
  background-color: ${props => props.theme.color.grey};
  object-fit: contain;
  object-position: center;
  filter: grayscale(90%);
  transition: all .3s ease;
  user-select: none;
  border: 2px solid ${props => props.theme.color.white};
  &:hover, &:active, &:focus{
    filter: none;
     border: 2px solid ${props => props.theme.color.lemon};
  }
   ${mediaMax.sm`
     filter: none;
     box-shadow: 2px 1px 20px 0px rgba(0,0,0,0.1); 
      border: 1px solid ${props => props.theme.color.mist};
  `}
`;
const ImageCaption = styled.div`
  
   ${mediaMax.sm`
     ${ellipsis('100%')}
     font-weight: 500;
     font-family: ${props => props.theme.font.second};
  `}
  ${mediaMin.mdMin`
    display: none;
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
        {
          project
            ? (
              <div>
                <Title>{project.name}</Title>
                <Description>{project.description}</Description>
                <InfoGroup>
                  {/*<Sources>*/}
                    {/*{*/}
                      {/*project.sources.map(source => (*/}
                        {/*<span key={source}>{_.capitalize(source)}</span> || null*/}
                      {/*))*/}
                    {/*}*/}
                  {/*</Sources>*/}
                  <Environments>
                    For:
                    {
                      project.environments.map((en) => {
                        if (en.toLowerCase() === 'pc') {
                          return <IconPc key={en} />;
                        } if (en.toLowerCase() === 'mobile') {
                          return <IconMobile key={en} />;
                        }
                        return null;
                      })
                    }
                  </Environments>
                  <Types>
                    Role:
                    {
                      project.types.map(type => (
                        <span key={type}> {type} </span> || null
                      ))
                    }
                  </Types>

                </InfoGroup>
                {
                project.links
                  ? (
                    <Links>
                      {
                        project.links.map(link => (
                          link ? (
                            <li key={link}>
                              <Link target="_blank" to={`//${link}`}>{link}</Link>
                            </li>
                          ) : ''
                        ))
                      }
                    </Links>) : ''
              }
                <GridContainer>
                  {
                  project.images.map((image, index) => (
                    <Grid key={index}>
                      <ImageCaption>{image.description}</ImageCaption>
                      <GridImage onClick={handleClick} src={image.url} alt={image.description} />
                    </Grid> || null))
                }
                </GridContainer>
              </div>
            ) : ''
        }
      </Detail>
    );
  }
}

export default ProjectDetailComponent;
