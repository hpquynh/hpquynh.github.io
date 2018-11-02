import styled, { css } from 'styled-components';
import { displayFlex } from '../../styles/utils';

export const InputStyle = css`
  height: 32px;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  ${props => props.className === 'error' && css`
   border: 1px solid red;
  `}
`;
export const FormStyle = css`
   width: 100%;
  padding: 5px;
  box-sizing: border-box; 
  
  ${props => props.className === 'vertical' && css`
      ${displayFlex('column', 'flex-start', 'flex-start')}
  `}
`;
export const ErrorMessageStyle = css`
  color: red;
  margin-top: .25rem;
 `;
export const Form = styled.form`
  width: 100%;
  padding: 5px;
  box-sizing: border-box; 
  
  ${props => props.className === 'vertical' && css`
      ${displayFlex('column', 'flex-start', 'flex-start')}
  `}
`;

export const InputGroup = styled.div`
 ${displayFlex('column', 'flex-start', 'flex-start')}
  margin-bottom: 15px;
  width: 100%;
`;

export const Input = styled.input`
  ${InputStyle}
`;

export const ButtonGroup = styled.div`
 ${displayFlex('row', 'space-around', 'center')}
  margin-bottom: 10px;
  width: 100%;
`;
export const Button = styled.button`
  background-color: ${props => props.theme.color.moon};
   ${displayFlex('column', 'center', 'center')}
  color: white;
  text-align: center;
  width: auto;
  height: 32px;
  box-sizing: border-box;
  padding: 15px;
  cursor: pointer;
  transition: opacity .3s ease;
  &:hover{
    opacity: .8;
  }
  ${props => props.className === 'secondary' && css`
     background-color: ${props => props.theme.color.sky};
  `};
`;
export const ButtonIcon = styled.button`
  background-color: ${props => props.theme.color.sun};
   ${displayFlex('column', 'center', 'center')}
  color: ${props => props.theme.color.shadow};
  border-color: ${props => props.theme.color.sun};
  text-align: center;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  cursor: pointer;
  transition: opacity .3s ease;
  &:hover{
    opacity: .8;
  }
`;

export const CustomMessage = styled.div`
   ${ErrorMessageStyle}
 `;

export const CheckboxGroup = styled.div`
  ${displayFlex('row wrap', 'flex-start', 'center')}
  width: 100%;
`;