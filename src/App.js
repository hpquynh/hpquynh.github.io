import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import WebFont from 'webfontloader';
import store from './store/rootStore';
import { theme } from './vars/theme';
import { GlobalStyle } from './styles/style';
import AuthRoute from './components/AuthRoute/index';
import ProjectContainer from './container/Project/index';
import LoginComponent from './components/Login/index';
import Error404 from './components/Error404/index';
import AnimatedComponent from './components/common/AnimatedComponent';
import ProjectEditorComponent from './components/Project/ProjectEditor';
import ProjectDetailContainer from './container/Project/ProjectDetailContainer';
import SplashComponent from './components/Splash';
import HomeComponent from './components/Home';

WebFont.load({
  google: {
    families: ['Cousine:400,700&amp;subset=vietnamese'],
  },
});
WebFont.load({
  google: {
    families: ['Montserrat:300,400,500&amp;subset=vietnamese'],
  },
});

class App extends React.PureComponent {
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <AnimatedComponent>
                <GlobalStyle />
                <Switch>
                  <Route path="/" component={SplashComponent} exact />
                  <Route path="/home" component={HomeComponent} exact />
                  <Route path="/project" component={ProjectContainer} exact />
                  <Route path="/project/:id" component={ProjectDetailContainer} />
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
