// @flow
import * as React from 'react';
import Masonry from 'react-masonry-component';
import styled from 'styled-components';
import { displayFlex, fontSize, mediaMax } from '../../styles/utils';
import Loading from './Loading';
import imgTest from '../../images/picture2.png';
import imgTest2 from '../../images/mockup.png';
import imgTest3 from '../../images/picture3.png';

const masonryOptions = {
  transitionDuration: 200,
};
const Item = styled.div`
  width: 50%;
  cursor: pointer;
  padding: 30px 10px 50px;
  box-sizing: border-box;
  ${displayFlex('column', 'flex-start', 'center')}
  &:nth-of-type(1){
    padding-top: 100px;
  }
 ${mediaMax.sm`
    width: 100%;
    padding: 20px 10px;
    &:nth-of-type(1){
      padding-top: 0;
    }
 `}
`;
const ItemContent = styled.a`
  width: 85%;
  height: auto;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  ${displayFlex('column', 'flex-start', 'flex-start')}
  transition: all .5s ease;
  position: relative;
  &:after{
    content: '';
     background-color: transparent;
     transition: all .5s ease;
  }
  &:hover{
    background-color: ${props => props.theme.color.mist};
    border-radius: 15px;
    overflow: hidden;
    &:after{
      z-index: 3;
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(255,252,117, .8);
    }
  }
  ${mediaMax.sm`
    width: 100%;
 `}
`;
const Thumbnail = styled.img`
  width: 100%;
  min-height: 100px;
  background-color: ${props => props.theme.color.mist};
`;
const Info = styled.div`
  width: 100%;
  padding: 10px;
`;
const Name = styled.div`
 font-family: ${props => props.theme.font.main};
 ${fontSize('28px')}
`;
const masonryStyle = {
  display: 'block',
};
type Props = {
  elements: Array,
}

class Gallery extends React.PureComponent<Props> {
  render() {
    const { elements } = this.props;
    const childElements = elements.map(element => (
      <Item key={element.id}>
        <ItemContent>
          <Thumbnail src={element.data.thumbnailUrl} alt="gallery" />
          <Info>
            <Name>{element.data.name}</Name>
            <p>{element.data.description}</p>
          </Info>
        </ItemContent>
      </Item>
    ));
    if (!this.props || elements === undefined) {
      return (
        <Loading />
      );
    }
    return (
      <Masonry
        style={masonryStyle}
        options={masonryOptions}
      >
        {childElements}
      </Masonry>
    );
  }
}

export default Gallery;
