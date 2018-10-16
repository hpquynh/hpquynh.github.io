// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { Container, NavTitle } from './style';
import { displayFlex } from '../../styles/utils';

type Props = {
  navTitle: string
}
export default class HomeContact extends React.PureComponent<Props> {
  render() {
    const { navTitle } = this.props;
    return (
      <Container>
        <MainContent>
          <Des>
            <DesChild>
              If you want to create something <HighLight className="sun">awesome</HighLight>,
              you’re very welcome to contact me.
            </DesChild>
            <DesChild>I’m available for <HighLight className="moon">freelance projects</HighLight> and <HighLight className="lemon">full-time employment</HighLight>.</DesChild>
          </Des>
          <Contact>
            <Phone>
              <span>Call me:</span>
              <span>(+84) 70 5911 112</span>
            </Phone>
            <Email>
              <span>Email:</span>
              <span>hophuongquynh92@gmail.com</span>
            </Email>
            <Skype>
              <span>Skype:</span>
              <span>live:hophuongquynh</span>
            </Skype>
          </Contact>
        </MainContent>
        <NavTitle title={navTitle}>{navTitle}</NavTitle>
      </Container>
    );
  }
}
const MainContent = styled.div`
  ${displayFlex('column', 'flex-start', 'center')}
  position: relative;
  padding: 15px;
`;

const Des = styled.p`
  ${displayFlex('column wrap', 'flex-start', 'flex-start')}
  padding: 20px;
  margin: 20px auto 0 auto;
  
`;
const Contact = styled.div`
  ${displayFlex('column wrap', 'flex-start', 'flex-start')}
  padding: 20px;
  p{
    margin: 0;
  }
`;
const ContactStyle = css`
  span{
    font-size: 20px;
    font-size: ${rem('20px')};
  }
  span:first-child{
    color: #d3d3d3;
  }
`;
const Phone = styled.p`
  ${ContactStyle};
`;
const Email = styled.p`
  ${ContactStyle};
`;
const Skype = styled.p`
  ${ContactStyle};
`;
const DesChild = styled.span`
   font-size: 20px;
   font-size: ${rem('20px')};
`;

const HighLight = styled.span`
  padding: 1px 3px;
  font-size: 20px;
  font-size: ${rem('20px')};
  margin-left: 3px;
  ${props => props.className === 'sun' && css`
    background-color: ${props.theme.color.sun};
  `};
  ${props => props.className === 'moon' && css`
    background-color: ${props.theme.color.moon};
  `};
  ${props => props.className === 'lemon' && css`
    background-color: ${props.theme.color.lemon};
  `};
  
`;