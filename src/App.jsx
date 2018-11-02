import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import WebFont from 'webfontloader';
import store from './store/rootStore';
import { theme } from './vars/theme';
import { GlobalStyle } from './styles/style';
import AuthRoute from './components/AuthRoute';
import ProjectComponent from './components/Project';
import LoginComponent from './components/Login';
import Error404 from './components/Error404';
import AnimatedComponent from './components/common/AnimatedComponent';
import MainComponent from './components/Main';
import ProjectDetailComponent from './components/Project/ProjectDetail';
import ProjectEditorComponent from './components/Project/ProjectEditor';

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
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <AnimatedComponent>
                <GlobalStyle />
                <Switch>
                  <Route path="/" component={() => <MainComponent action={() => this.handleClick()} isSplashing={isSplashing} />} exact />
                  <Route path="/project" component={ProjectComponent} exact />
                  <Route path="/project/:id" component={ProjectDetailComponent} />
                  <Route path="/login" component={LoginComponent} />
                  <AuthRoute path="/create" component={ProjectEditorComponent} exact />
                  <Route path="*" component={Error404} />
                </Switch>
              </AnimatedComponent>
            </ThemeProvider>
          </BrowserRouter>

        </Provider>
      </CookiesProvider>
    );
  }
}

export default App;
