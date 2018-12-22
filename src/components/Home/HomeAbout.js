// @flow
import React from 'react';
import styled from 'styled-components';
import { NavTitle, Container } from '../common/style';
import { displayFlex, mediaMax, fontSize } from '../../styles/utils';
import bgImg from '../../images/doit.svg';
import bgDot from '../../images/dot.svg';

export const CustomContainer = styled(Container)`
  background-image: url(${bgImg});
  background-color: ${props => props.theme.color.lemon};
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  will-change: transform;
  ${mediaMax.sm`
    background-size: cover;
  `}
`;
const Content = styled.div`
  background-color: rgba(255,255,255,.95);
  ${displayFlex('column', 'flex-start', 'flex-start')}
  padding: 20px;
  margin: 20px;
  border-radius: 15px;
  width: 48%;
  z-index: 1;
   ${fontSize('14px')}
  ${mediaMax.md`
    width: 80%;
  `}
  ${mediaMax.sm`
    width: 100%;
    ${fontSize('12px')}
    margin: 30px;
    padding: 15px;
  `}
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
    background-attachment: fixed;
    opacity: .2;
    z-index: 0;
    will-change: transform;
  }
 
  ${mediaMax.md`padding: 15px;`}
  ${mediaMax.sm`flex-direction: column; justify-content: center; padding: 15px;`}
`;
const AboutMe = styled.div`
  ${displayFlex('column nowrap', 'flex-start', 'flex-start')}
  height: auto;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-sizing: border-box;
 
`;
const Skills = styled.div`
  padding: 0;
  margin: 10px 0 0;
  box-sizing: border-box;
  
`;
const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  width: 100%;
  ${displayFlex('row wrap', 'flex-start', 'flex-start')};
`;
const Skill = styled.li`
  padding: 5px 5px 2px 5px;
  margin: 3px;
  &:nth-of-type(2n){
    background-color: ${props => props.theme.color.shadow};
    color: ${props => props.theme.color.white};
  }
   &:nth-of-type(2n+1){
    background-color: ${props => props.theme.color.sun};
  }
`;
const Des = styled.div`
  ${displayFlex('row wrap', 'flex-start', 'center')};
  padding: 0;
  color: ${props => props.theme.color.grey};
`;
const Item = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.color.grey};
`;
type Props = {
  navTitle: string,
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
    const { navTitle } = this.props;
    const { skills } = this.state;
    return (
      <CustomContainer>
        <MainContent image={bgDot}>
          <Content>
            <AboutMe>
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
                related with it.
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
          </Content>
        </MainContent>
        <NavTitle isDark="true" title={navTitle}>
          <span title=">">&gt;</span>
          {navTitle}
        </NavTitle>
      </CustomContainer>
    );
  }
}
