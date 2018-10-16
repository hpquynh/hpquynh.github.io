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
// import AnimatedComponent from './components/AnimatedComponent';

WebFont.load({
  google: {
    families: ['Cousine:400,700&amp;subset=vietnamese', 'Montserrat:300,400,500&subset=vietnamese'],
  },
});
class App extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      const divStyle = {
        background: 'linear-gradient(to top,#1e2e37 0%,#050608 100%)',
        height: '100vh',
        margin: '-8px',
        padding: '0',
      };

      return (
        <div style={divStyle}>Loading...</div>
      );
    }

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <main>
              <GlobalStyle />
              <Switch>
                <Route path="/" component={MainComponent} />
                <Route path="/project" component={ProjectComponent} />
              </Switch>
            </main>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
