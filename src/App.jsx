import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import store from './store/rootStore';
import { theme } from './vars/theme';
import { GlobalStyle } from './styles/style';
import MainComponent from './components/Main';
import ProjectComponent from './components/Project';

WebFont.load({
  google: {
    families: ['Montserrat:300,400,500&subset=vietnamese'],
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <main>
            <GlobalStyle />
            <Switch>
              <Route path="/" component={MainComponent} exact />
              <Route path="/project" component={ProjectComponent} />
            </Switch>
          </main>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
