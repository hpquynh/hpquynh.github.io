// @flow
import React from 'react';
import Home from '../Home';
import Splash from '../Splash';

type Props = {
  isSplashing: boolean,
  action: Function,
}
export default class MainComponent extends React.Component<Props> {
  render() {
    const { isSplashing, action } = this.props;
    return isSplashing ? <Splash action={action} /> : <Home />;
  }
}
