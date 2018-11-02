// @flow
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { Redirect, withRouter } from 'react-router';
import { displayFlex } from '../../styles/utils';
import { LoginForm } from './LoginForm';
import { Container } from '../common/style';
import { login } from '../../actions/loginAction';
import { selector } from '../../selectors/login';

const MainContent = styled.div`
  ${displayFlex('row', 'center', 'flex-start')}
  position: relative;
  height: 100%;
  padding: 20vh 15px 15px 15px;
  margin: auto;
  width: 400px;
  max-width: 100%;
`;

type Props = {
  login: Function,
  allCookies: {is_auth: string},
};

type State = {
  email: string,
  password: string,
}

class LoginComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }

  handleChange = (e) => {
    const t = e.target;
    if (t.type === 'password') {
      this.setState({ password: t.value });
    } else {
      this.setState({ email: t.value });
    }
  }

  isAuthenticated = (): boolean => {
    if(this.props.allCookies.is_auth) this.props.cookies.set('is_auth', this.props.allCookies.is_auth, { path: '/' });
    return this.props.allCookies.is_auth;
  }

  render() {
    const { email, password } = this.state;
    return this.isAuthenticated() ? <Redirect to="/create" />
      : (
        <Container>
          <MainContent>
            <LoginForm
              email={email}
              password={password}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
          </MainContent>
        </Container>
      );
  }
}
export default compose(
  withRouter,
  withCookies,
  connect(selector, { login }),
)(LoginComponent);
