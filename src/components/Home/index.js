import React from 'react';
import HomeTop from './HomeTop';
import HomeProject from './HomeProject';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import Navigation from '../common/Navigation';
import { AnimatedWrapper } from '../common/style';
import { getCurrentSection } from '../../styles/utils';

export default class HomeComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      scrollY: 0,
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
    let scrollTop = 0;
    const current = getCurrentSection(y, window.innerHeight, 4);
    if (current < 3) {
      scrollTop = y;
      // translateStyle = {
      //   transform: `rotate(-90deg) translate3d(${y}px, -140px, 0px)`,
      // };
    }
    this.setState({
      currentIndex: current,
      scrollY: scrollTop,
    });
  };

  render() {
    const { currentIndex, scrollY } = this.state;
    return (
      <AnimatedWrapper>
        <Navigation isFinished={currentIndex === 3} />
        <HomeTop scrollY={scrollY} data-index={0} isAnimated={currentIndex === 0} navTitle="Intro" />
        <HomeProject data-index={1} isAnimated={currentIndex === 1} navTitle="My works" />
        <HomeAbout data-index={2} navTitle="About me" />
        <HomeContact data-index={3} isAnimated={currentIndex === 3} navTitle="Contact me" />
      </AnimatedWrapper>
    );
  }
}
