import React from 'react';

const ImageCard = (props) => {
  const { children } = props;
  return <div className="imageBox">{children}</div>;
};

export default ImageCard;
