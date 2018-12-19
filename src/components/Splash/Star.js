// @flow
import React from 'react';
import { times } from 'lodash';
import styled from 'styled-components';
import { twinkle } from '../../styles/keyframes';
import { randomStar } from '../../styles/utils';

const Stars = styled.span`
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
`;
const Star = styled.span`
  background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);;
  box-shadow: 0 0 1px 1px white;
  height: 1px;
  width: 1px;
  position: absolute;
  z-index: 0;
  opacity: .5;
  animation: ${twinkle} 20s infinite;
  border-radius: 50%;
  ${randomStar()}
`;

type Props = {
  total: number,
}
export default class StarComponent extends React.PureComponent<Props> {
  render() {
    const { total } = this.props;
    return (
      <Stars>
        {
          times(total, i => <Star key={i} />)
        }
      </Stars>
    );
  }
}
