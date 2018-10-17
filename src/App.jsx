import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import store from './store/rootStore';
import { theme } from './vars/theme';
import { GlobalStyle } from './styles/style';
import ProjectComponent from './components/Project';
import Error404 from './components/Error404';
import AnimatedComponent from './components/AnimatedComponent';
import MainComponent from './components/Main';

WebFont.load({
  google: {
    families: ['Cousine:400,700&amp;subset=vietnamese', 'Montserrat:300,400,500&subset=vietnamese'],
  },
});
class App extends React.Component {
  constructor() {
    super();
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
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <main>
              <AnimatedComponent>
                <GlobalStyle />
                <Switch>
                  <Route path="/" component={() => <MainComponent action={() => this.handleClick()} isSplashing={isSplashing} />} exact />
                  <Route path="/project" component={ProjectComponent} />
                  <Route path="*" component={Error404} />
                </Switch>
              </AnimatedComponent>
            </main>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
