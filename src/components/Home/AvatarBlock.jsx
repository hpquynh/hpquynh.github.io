// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  image: string,
  scrollY: number
}
const Avatar = styled.svg`
  width: 300px;
  height: auto;
  transition: all .6s ease;
  will-change: transform;
  //transform: translate(-${props => props.scrollY}px, -${props => props.scrollY}%);
 .frame{
    fill:none;
    stroke:none;
  }
  .mask{
    fill: white;
  }
  use{
    fill: #f5f5f5;
  }
  .stroke1{
    fill:#FFF;
    stroke:#f5f5f5;
  }
  .stroke2{
    stroke:#f5f5f5;
  }
`;

export default class AvatarBlock extends React.PureComponent<Props> {
  render() {
    const { image, scrollY } = this.props;
    return (
      <Avatar scrollY={scrollY} viewBox="0 0 413 277">
        <defs>
          <path id="path-1" d="M203.5 255C307.053391 255 391 197.916306 391 127.5 391 57.0836944 307.053391 0 203.5 0 99.9466094 0 0 0.583694401 0 71 0 141.416306 99.9466094 255 203.5 255Z" />
        </defs>
        <g strokeWidth="1" fillRule="evenodd" className="frame">
          <g transform="translate(-187 -222)translate(198 233)">
            <mask id="mask-2" className="mask">
              <use xlinkHref="#path-1" />
            </mask>
            <g>
              <use strokeWidth="22" fillOpacity="0" fillRule="evenodd" xlinkHref="#path-1" className="stroke1" />
              <use strokeWidth="8" xlinkHref="#path-1" className="stroke2" />
            </g>
            <image mask="url(#mask-2)" x="-1" y="-117" width="460" height="457" xlinkHref={image} />
          </g>
        </g>
      </Avatar>
    );
  }
}
