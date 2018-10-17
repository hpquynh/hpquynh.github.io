import React from 'react';
import styled from 'styled-components';
import { displayFlex } from '../../styles/utils';

const Error404 = () => (
  <ErrorWrapper>
    <span>:(</span>
    <span>Oops! Not found</span>
  </ErrorWrapper>
);
export default Error404;

const ErrorWrapper = styled.div`
  ${displayFlex('column', 'center', 'center')}
  width: 100%;
  height: 100vh;
  span{
   font-size: 20px;
  }
`;