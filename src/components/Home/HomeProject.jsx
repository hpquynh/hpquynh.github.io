// @flow
import React from 'react';
import styled, {css} from 'styled-components';
import { Container, NavTitle } from './style';
import { displayFlex } from '../../styles/utils';
import objImg from '../../images/mockup.png';
import WorkFrame from './WorkFrame';
import { fadeIn } from '../../styles/keyframes';

type Props = {
  navTitle: string,
  isAnimated: boolean
}
export default class HomeProject extends React.PureComponent<Props> {
  render() {
    const { navTitle, isAnimated } = this.props;
    return (
      <Container>
        <MainContent>
          <FadeIn isAnimated={isAnimated}>
            <Title>Frontend</Title>
            <Title>UI design</Title>
          </FadeIn>
          <WorkFrame isAnimated={isAnimated} image={objImg} />
        </MainContent>

        <NavTitle title={navTitle}>{navTitle}</NavTitle>

      </Container>
    );
  }
}
const MainContent = styled.div`
  ${displayFlex('row', 'center', 'center')}
  position: relative;
  padding: 15px;
`;
const Title = styled.div`
    font-size: 60px;
    display: block;
    font-family: ${props => props.theme.font.second};
    text-transform: uppercase;
    margin-bottom: 10px;
    padding: 5px 10px;
 
    &:nth-of-type(1){
      background-color: ${props => props.theme.color.lemon};
    }
     &:nth-of-type(2){
      background-color: ${props => props.theme.color.sun};
    }
`;
const FadeIn = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0;
  ${props => props.isAnimated && css`
    animation: ${fadeIn} 7s 0s ease;
    opacity: 1;
  `}
`;
// const Round = styled.svg`
//   position: absolute;
//   right: -40px;
//   bottom: -60px;
// `;

// const RoundBlock = () => (
//   <Round className="backgroundSvgTopLayer__ovalBottom" height="342" viewBox="0 0 342 342" width="342">
//     <defs><circle cx="170.5" cy="170.5" id="pathDashed" r="170.5" /></defs>
//     <g fill="none" fillRule="evenodd" transform="rotate(30 169.137 171.494)">
//       <mask fill="#fff" id="maskDashed"><use xlinkHref="#pathDashed" /></mask>
//       <g className="coloredSvgElement-stroke" id="Group-17" mask="url(#maskDashed)" stroke="#f5f5f5" strokeWidth="8"><path d="M3.905-5.206v398.27M24.729-5.206v398.27M45.553-5.206v398.27M66.378-5.206v398.27M87.202-5.206v398.27M108.027-5.206v398.27M128.851-5.206v398.27M149.676-5.206v398.27M170.5-5.206v398.27M191.324-5.206v398.27M212.149-5.206v398.27M232.973-5.206v398.27M253.798-5.206v398.27M274.622-5.206v398.27M295.447-5.206v398.27M316.271-5.206v398.27M337.095-5.206v398.27" /></g>
//     </g>
//   </Round>
// );
