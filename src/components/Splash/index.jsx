// @flow
import React from 'react';
import { times } from 'lodash';
import {
  SplashSection, LogoButton, Logo, Background, Child1, Child2, Stars, Star,
} from './style';

type Props = {
  onClick: Function,
}
type State = {
  total: number,
}

export default class SplashComponent extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      total: 100,
    };
  }

  render() {
    const { onClick } = this.props;
    const { total } = this.state;
    return (
      <SplashSection>
        <Stars>
          {
            times(total, i => <Star key={i} />)
          }
        </Stars>
        <LogoButton onClick={onClick}>
          <Logo>
            <Background />
            <Child1 />
            <Child2 />
          </Logo>
        </LogoButton>
      </SplashSection>

    );
  }
}
