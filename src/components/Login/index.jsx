// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router';
import { displayFlex } from '../../styles/utils';
import { LoginForm } from './LoginForm';
import { Container } from '../../styles/style';
import { login } from '../../actions/loginAction';
import { selector } from '../../selectors/login';

type Props = {
  login: (payload: {}) => Promise<any>,
  allCookies: {is_auth: string},
}
class LoginComponent extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const t = e.target;
    if (t.type === 'password') {
      this.setState({ password: t.value });
    } else {
      this.setState({ account: t.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }

  isAuthenticated = (): boolean => !!this.props.allCookies.is_auth

  render() {
    const { email, password } = this.state;
    return this.isAuthenticated() ? <Redirect to="/project" />
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

const MainContent = styled.div`
  ${displayFlex('row', 'center', 'flex-start')}
  position: relative;
  height: 100%;
  padding: 20vh 15px 15px 15px;
`;
export default withCookies(connect(selector, { login })(LoginComponent));
