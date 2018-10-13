import React from 'react';
import HomeTop from './HomeTop';
import HomeProject from './HomeProject';
import Navigation from '../Navigation';

export default class HomeComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      scrollY: 0,
      isAnimated: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const y = window.scrollY;
    let isAnimated;
    if (y >= window.innerHeight && y <= window.innerHeight * 2) {
      isAnimated = true;
    } 
    this.setState({
      scrollY: y,
      isAnimated,
    });
  };

  render() {
    const { scrollY, isAnimated } = this.state;

    return (
      <div>
        <Navigation />
        <HomeTop scrollY={scrollY} navTitle="> Intro" />
        <HomeProject isAnimated={isAnimated} scrollY={scrollY} navTitle="> All Works" />
      </div>
    );
  }
}
