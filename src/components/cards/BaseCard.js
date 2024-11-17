import React from 'react';

const BaseCard = (props) => {
  const { children, header } = props;
  return (
    <div className="baseCard">
      <div className="cardHeader">
        <h3>{header}</h3>
      </div>
      {children}
    </div>
  );
};

export default BaseCard;
