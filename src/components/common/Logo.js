// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const LogoLink = styled(Link)`
   transition: all .5s ease;
   line-height: 1;
   display: flex;
   ${props => props.className === 'centered' && css`
      transform: translate(calc(50vw - 40px),0) scale(1.2);
  `}
`;
const LogoItem = styled.svg`
  width: 40px;
  height: 40px;
  user-select: none;
   ${props => props.className === 'centered' && css`
     width: 50px;
      height: 50px;
  `}
`;
type Props = {
  isFinished: boolean,
}
export default class Logo extends React.PureComponent<Props> {
  render() {
    const { isFinished } = this.props;
    const positionClass = isFinished ? 'centered' : '';
    return (
      <LogoLink className={positionClass} to="/home">
        <LogoItem width="352px" height="351px" viewBox="0 0 352 351">
          <defs />
          <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="logo">
              <path d="M168.559852,337.119703 C75.4668162,337.119703 0,261.652887 0,168.559852 C0,75.4668162 75.4668162,0 168.559852,0 C261.652887,0 337.119703,75.4668162 337.119703,168.559852 C337.119703,261.652887 261.652887,337.119703 168.559852,337.119703 Z M168.559852,259.582172 C218.830091,259.582172 259.582172,218.830091 259.582172,168.559852 C259.582172,118.289612 218.830091,77.5375318 168.559852,77.5375318 C118.289612,77.5375318 77.5375318,118.289612 77.5375318,168.559852 C77.5375318,218.830091 118.289612,259.582172 168.559852,259.582172 Z" id="Combined-Shape-Copy" fill="#52E8F3" />
              <path d="M49.0273198,49 L103.855053,103.827733 C87.5845235,120.271623 77.5375318,142.885568 77.5375318,167.846114 C77.5375318,218.116354 118.289612,258.868434 168.559852,258.868434 C193.520398,258.868434 216.134343,248.821443 232.578233,232.550913 L287.405966,287.378646 C256.930178,317.680516 214.931796,336.405966 168.559852,336.405966 C75.4668162,336.405966 0,260.93915 0,167.846114 C0,121.47417 18.7254499,79.4757883 49.0273198,49 Z" id="Combined-Shape" fill="#8F93F1" />
              <path d="M50,287.827315 L104.827315,233 C121.299115,249.4718 144.054695,259.65982 169.189814,259.65982 C194.15036,259.65982 216.764305,249.612829 233.208196,233.342299 L288.035929,288.170032 C257.56014,318.471902 215.561759,337.197352 169.189814,337.197352 C122.643296,337.197352 80.5033335,318.330648 50,287.827315 Z" id="Combined-Shape" fill="#8D8DEE" />
              <polygon id="Rectangle" fill="#52E8F3" points="169 222.827315 223.827315 168 351.455773 295.628459 296.628459 350.455773" />
              <polygon id="Rectangle-Copy" fill="#8D8DEE" points="169 223.413657 196.413657 196 323.767742 323.354085 296.354085 350.767742" />
            </g>
          </g>
        </LogoItem>
      </LogoLink>
    );
  }
}
