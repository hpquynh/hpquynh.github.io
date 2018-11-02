// @flow
import * as React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 200,
};
const masonryStyle = {
  display: 'block',
};
type Props = {
  location: {key: string},
  children: React.Node,
}

function Gallery({ location, children }: Props) {
  return (
    <Masonry
      key={location}
      style={masonryStyle}
      options={masonryOptions}
    >
      { children }
    </Masonry>
  );
}

export default Gallery;
