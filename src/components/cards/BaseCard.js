import React from 'react';

const BaseCard = (props) => {
  const { children } = props;
  return <div className="baseCard">{children}</div>;
};

export default BaseCard;
