// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { Container, NavTitle } from '../common/style';
import { displayFlex, fontSize, mediaMax } from '../../styles/utils';

const MainContent = styled.div`
  ${displayFlex('column', 'center', 'center')}
  position: relative;
  height: 100vh;
`;

const Des = styled.p`
  ${displayFlex('column wrap', 'flex-start', 'flex-start')}
  padding: 20px;
  margin: 20px auto 0 auto;
   ${mediaMax.lgMax`
     margin-top: 0;
     max-width: 400px;
  `}
  ${mediaMax.sm`
    padding: 15px;
  
  `}
  
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
   ${fontSize('20px')}
    ${mediaMax.sm`
     ${fontSize('16px')}
  `}
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
  ${fontSize('20px')}
  line-height: 1.8;
   ${mediaMax.lgMax`
     ${fontSize('18px')}
     line-height: 1.6;
  `}
   ${mediaMax.sm`
     ${fontSize('16px')}
     line-height: 1.6;
  `}
`;

const HighLight = styled.span`
  padding: 1px 3px;
  ${fontSize('20px')}
  margin-left: 3px;
  ${props => props.className === 'sun' && css`
    background-color: ${props.theme.color.sun};
    color: ${props => props.theme.color.grey};
  `};
  ${props => props.className === 'moon' && css`
    background-color: ${props.theme.color.moon};
  `};
  ${props => props.className === 'lemon' && css`
    background-color: ${props.theme.color.lemon};
     color: ${props => props.theme.color.grey};
  `};
  ${mediaMax.sm`
     ${fontSize('16px')}
  `}
`;
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
              If you want to create something
              {' '}
              <HighLight className="sun">awesome</HighLight>
,
              you’re very welcome to contact me.
            </DesChild>
            <DesChild>
I’m available for
              <HighLight className="moon">freelance projects</HighLight>
              {' '}
and
              <HighLight className="lemon">full-time employment</HighLight>
.
            </DesChild>
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
        <NavTitle title={navTitle}>
          <span title=">">&gt;</span>
          {navTitle}
        </NavTitle>
      </Container>
    );
  }
}
