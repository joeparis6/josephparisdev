import React from 'react';

const TextFrame = (props) => {
  const { children } = props;
  return <div className="textFrame">{children}</div>;
};

export default TextFrame;
