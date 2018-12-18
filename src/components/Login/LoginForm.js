// @flow
import React from 'react';
import {
  Form, Input, InputGroup, Button,
} from '../common/Form';

type Props = {
  email: string,
  password: string,
  onSubmit: (e: any) => void,
  onChange: (e: any) => void,
};

export class LoginForm extends React.Component<Props> {
  render() {
    const {
      email,
      password,
      onSubmit,
      onChange,
    } = this.props;
    return (
      <Form onSubmit={onSubmit} className="vertical">
        <InputGroup>
          <Input type="text" placeholder="Email" value={email} onChange={onChange} />
        </InputGroup>
        <InputGroup>
          <Input type="password" placeholder="Password" value={password} onChange={onChange} />
        </InputGroup>
        <Button type="submit">Login</Button>
      </Form>
    );
  }
}
