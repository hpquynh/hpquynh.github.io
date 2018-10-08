import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store/rootStore';
import { theme } from './vars/theme';
import MainComponent from './components/Main';
import ProjectComponent from './components/Project';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" component={MainComponent} exact />
            <Route path="/project" component={ProjectComponent} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
