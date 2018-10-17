// @flow
import React from 'react';
import { times } from 'lodash';
import {
  SplashSection, LogoButton, Logo, Background, Child1, Child2, Stars, Star,
} from './style';

type Props = {
  action: Function,
}
type State = {
  total: number,
}

export default class SplashComponent extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      total: 100,
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 1000);
  }

  render() {
    const { action } = this.props;
    const { total, isLoading } = this.state;
    if (isLoading) {
      const divStyle = {
        background: 'linear-gradient(to top,#1e2e37 0%,#050608 100%)',
        height: '100vh',
        margin: '0',
        padding: '0',
      };

      return (
        <div style={divStyle}></div>
      );
    }
    return (
      <SplashSection>
        <Stars>
          {
            times(total, i => <Star key={i} />)
          }
        </Stars>
        <LogoButton onClick={action}>
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
