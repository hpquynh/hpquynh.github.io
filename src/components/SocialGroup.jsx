import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IconFacebook, IconTwitter } from '../styles/icons';
import { displayFlex } from '../styles/utils';

const SocialList = styled.div`
  position: relative;
  padding: 0;
   ${displayFlex('row', 'flex-end', 'flex-start')}
   a{
    display: inline-block;
    padding: 5px;
    path{
      fill: ${props => props.theme.color.grey};
      transition: fill .2s ease;
    }
    &:hover{
      path{
        fill: ${props => props.theme.color.sun};
      }
    }
   }
`;
export default function SocialGroup() {
  return (
    <SocialList>
      <Link to="https://facebook.com/hpquynh/">
        <IconFacebook />
      </Link>
      <Link to="https://twitter.com/hpquynh92/">
        <IconTwitter />
      </Link>
    </SocialList>
  );
}
