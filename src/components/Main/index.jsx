import React from 'react';
import Home from '../Home';
import Splash from '../Splash';


export default class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSplashing: true,
    };
  }

  handleClick() {
    const { isSplashing } = this.state;
    this.setState({
      isSplashing: !isSplashing,
    });
  }

  render() {
    const { isSplashing } = this.state;
    return isSplashing ? <Splash onClick={() => this.handleClick()} /> : <Home />;
  }
}
