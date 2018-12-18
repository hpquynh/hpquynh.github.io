// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  IconFacebook, IconTwitter, IconInstagram, IconLinkedin,
} from '../../styles/icons';
import { displayFlex } from '../../styles/utils';

const SocialList = styled.div`
  position: relative;
  padding: 0;
   ${displayFlex('row', 'flex-end', 'flex-start')}
   position: fixed;
   transform: translate(calc(100vw - 170px),0);
   svg{
    width: 25px;
    height: auto;
   }
   a{
    display: inline-block;
    padding: 5px;
    path{
      transition: all .5s ease;
    
    }
    &:hover{
      path{
         &:last-child{
          fill: ${props => props.theme.color.sun};
         }
      }
    }
   }
   transition: all .5s ease;
   ${props => props.className === 'centered' && css`
      transform: translate(calc(50vw - 147px),65px);
      a{
        margin: 3px;
        &:hover path{
         opacity: .7;
        }
        &:hover path:last-child{
          fill: initial;
        }
      }
      a:nth-of-type(1) path:first-child{
        fill: #8db8ee;
      }
      a:nth-of-type(2) path:first-child{
        fill: #7becfe;
      }
      a:nth-of-type(3) path:first-child{
        fill: #fd9727;
      }
      a:nth-of-type(4) path:first-child{
        fill: #178ace;
      }
      svg{
        width: 50px;
        height: auto;
      }
  `}
`;
type Props = {
  isFinished: boolean,
}
export default class SocialGroup extends React.PureComponent<Props> {
  render() {
    const { isFinished } = this.props;
    const positionClass = isFinished ? 'centered' : '';
    return (
      <SocialList className={positionClass}>
        <Link to="//facebook.com/hpquynh/" target="_blank">
          <IconFacebook />
        </Link>
        <Link to="//twitter.com/hpquynh92/" target="_blank">
          <IconTwitter />
        </Link>
        <Link to="//instagram.com/quynhhp/" target="_blank">
          <IconInstagram />
        </Link>
        <Link to="//linkedin.com/in/quynhhp/" target="_blank">
          <IconLinkedin />
        </Link>
      </SocialList>
    );
  }
}
