// @flow
import React from 'react';
import styled from 'styled-components';
import LogoButton from './LogoButton';
import StarComponent from './Star';

const SplashSection = styled.section`
  background-image: linear-gradient(to top, ${props => props.theme.color.dark} 0%, ${props => props.theme.color.darker} 100%);
  background-attachment:fixed;
  transition: background .2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

type State = {
  total: number,
}

export default class SplashComponent extends React.PureComponent<Props, State> {
  constructor() {
    super();
    this.state = {
      total: 100,
      // isLoading: true,
    };
  }

  // componentDidMount() {
  //   this.timerHandle = setTimeout(() => {
  //     this.setState({ isLoading: false });
  //     this.timerHandle = 0;
  //   }, 300);
  //   this.setState({ isLoading: false });
  // }

  // componentWillUnmount() {
  //   if (this.timerHandle) {
  //     clearTimeout(this.timerHandle);
  //     this.timerHandle = 0;
  //   }
  // }

  render() {
    // const { total, isLoading } = this.state;
    const { total } = this.state;
    // if (isLoading) {
    //   const divStyle = {
    //     background: 'linear-gradient(to top,#1e2e37 0%,#050608 100%)',
    //     height: '100vh',
    //     margin: '0',
    //     padding: '0',
    //   };
    //
    //   return (
    //     <div style={divStyle} />
    //   );
    // }
    return (
      <SplashSection>
        <StarComponent total={total} />
        <LogoButton link="/home" />
      </SplashSection>

    );
  }
}
