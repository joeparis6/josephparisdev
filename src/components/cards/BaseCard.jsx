import React from 'react';

const BaseCard = (props) => {
  const { children, header, subHeader = '' } = props;
  return (
    <div className="baseCard">
      <div className="cardHeader">
        <h3>{header}</h3>
        <h5>{subHeader}</h5>
      </div>
      {children}
    </div>
  );
};

export default BaseCard;
