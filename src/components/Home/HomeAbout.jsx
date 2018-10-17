// @flow
import React from 'react';
import styled from 'styled-components';
import { NavTitle } from './style';
import { displayFlex, mediaMax } from '../../styles/utils';
import bgImg from '../../images/doit.svg';

type Props = {
  navTitle: string,
  isAnimated: boolean
}
export default class HomeAbout extends React.PureComponent<Props> {
  constructor() {
    super();
    this.state = {
      skills: {
        frontend: ['HTML5', 'SASS/LESS/CSS', 'Styled Component', 'Bootstrap', 'Javascript', 'ReactJs', 'jQuery', 'AJAX', 'npm/yarn', 'bower', 'JSON'],
        design: ['Adobe Illustrator', 'Adobe Photoshop', 'Sketch', 'Zeplin'],
      },
    };
  }

  render() {
    const { navTitle, isAnimated } = this.props;
    const { skills } = this.state;
    return (
      <Container>
        <MainContent image={bgImg}>
          <AboutMe isAnimated={isAnimated}>
            <Item>
              I obtained an entry-level position as an Android developer
              when I were a 4th year student in Danang University of
              Technology and Science. During that time,
              I also designed UI for both web and mobile apps.
            </Item>
            <Item>
              More than one year later, I started to work in Nal Solutions.
              I tried another new role - Frontend developer and
              have sticked with it till now.
            </Item>
          </AboutMe>
          <Skills>
            <Des>
              Main area of my expertise is front-end development and everything
              related with this side of web.
            </Des>
            <SkillList>
              {skills.frontend.map((skill, i) => <Skill key={`fe_${i}`}>{skill}</Skill>)}
            </SkillList>
            <Des>
              I also have some experience with UI design
            </Des>
            <SkillList>
              {skills.design.map((skill, i) => <Skill key={`ui_${i}`}>{skill}</Skill>)}
            </SkillList>
          </Skills>
        </MainContent>
        <NavTitle title={navTitle}>{navTitle}</NavTitle>
      </Container>
    );
  }
}
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${props => props.theme.color.lemon};
`;
const MainContent = styled.div`
  ${displayFlex('row', 'flex-end', 'center')}
  width: 100%; 
  min-height: 100vh;
  height: auto;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  &:after{
    content: '';
    position: absolute;
    left: 0; right: 0; top: 0; bottom: 0;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    background-attachment: fixed;
    z-index: 0;
  }
  
  ${mediaMax.md`padding: 15px;`}
  ${mediaMax.sm`flex-direction: column; justify-content: center; padding: 15px;`}
`;
const AboutMe = styled.div`
  ${displayFlex('column nowrap', 'flex-start', 'flex-start')}
  width: 30vw;
  height: auto;
  border: 2px dashed ${props => props.theme.color.altermoon};
  padding: 0;
  margin-right: 20px;
  background-color: white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;
  ${mediaMax.md`
    width: 48%;
  `}
  ${mediaMax.sm`
    width: 100%;
    margin-right: 0;
  `}
  
`;
const Skills = styled.div`
  width: 30vw;
  padding: 10px;
  margin-right: 20px;
  font-family: ${props => props.theme.font.second};
  font-weight: 500px;
  z-index: 1;
  box-sizing: border-box;
   ${mediaMax.md`
    width: 48%;
  `}
  ${mediaMax.sm`
    width: 100%;
    margin-right: 0;
  `}
`;
const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  ${displayFlex('row wrap', 'flex-start', 'flex-start')};
`;
const Skill = styled.li`
  padding: 5px;
  margin: 3px;
  font-family: ${props => props.theme.font.main};
  color: white;
  &:nth-of-type(2n){
    background-color: ${props => props.theme.color.shadow};
  
  }
   &:nth-of-type(2n+1){
    background-color: ${props => props.theme.color.moon};
  }
`;
const Des = styled.div`
  ${displayFlex('row wrap', 'flex-start', 'center')};
  padding: 5px;
  background: white;
`;
const Item = styled.p`
  font-size: 14px;
  margin: 5px 0;
  padding: 20px;
`;


