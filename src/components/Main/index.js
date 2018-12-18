// @flow
import React from 'react';
import Home from '../Home/index';
import Splash from '../Splash/index';

type Props = {
  isSplashing: boolean,
  action: Function,
}
export default class MainComponent extends React.PureComponent<Props> {
  render() {
    const { isSplashing, action } = this.props;
    return isSplashing ? <Splash action={action} /> : <Home />;
  }
}
