// @flow
import React from 'react';
import styled, { css } from 'styled-components';
import { displayFlex } from '../../styles/utils';

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


export const Form = styled.form`
  height: 32px;
  padding: 5px;
  box-sizing: border-box;
  
  
  ${props => props.className === 'vertical' && css`
      ${displayFlex('column', 'flex-start', 'flex-start')}
  `}
`;

export const InputGroup = styled.div`
  margin-bottom: 10px;
`;

export const Input = styled.input`
  height: 32px;
  padding: 5px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.color.moon};
   ${displayFlex('column', 'center', 'center')}
  color: white;
  text-align: center;
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  padding: 15px;
`;
