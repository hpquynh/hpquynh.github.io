import React from 'react';
import HomeTop from './HomeTop';
import HomeProject from './HomeProject';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import Navigation from '../common/Navigation';
import { AnimatedWrapper } from '../common/style';

export default class HomeComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isAnimated: false,
      isFinished: false,
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
    let count = 0;
    let { isAnimated, isFinished } = this.state;
    if (isAnimated) {
      count += 1;
    } else if ((y > window.innerHeight / 1.5) && (count === 0)) {
      isAnimated = true;
      count += 1;
    }
    if (y >= window.innerHeight * 3) {
      isFinished = true;
    } else {
      isFinished = false;
    }
    this.setState({
      isAnimated,
      isFinished,
    });
  };

  render() {
    const { isAnimated, isFinished } = this.state;
    return (
      <AnimatedWrapper>
        <Navigation isFinished={isFinished} />
        <HomeTop navTitle="Intro" />
        <HomeProject isAnimated={isAnimated} navTitle="My works" />
        <HomeAbout isAnimated={isAnimated} navTitle="About me" />
        <HomeContact navTitle="Contact me" />
      </AnimatedWrapper>
    );
  }
}
