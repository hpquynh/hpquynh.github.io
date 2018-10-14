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
      count: 0,
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
    let { isAnimated, count } = this.state;
    if (isAnimated) {
      count += 1;
    } else if ((y === window.innerHeight) && (count === 0)) {
      isAnimated = true;
      count += 1;
    }

    this.setState({
      scrollY: y,
      isAnimated,
      count,
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
