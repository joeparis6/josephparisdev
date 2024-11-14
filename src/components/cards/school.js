import React from 'react';

const School = (props) => {
  const { schoolName, degree, year } = props;
  return (
    <div className="school">
      <div className="baseCard">
        <div className="header">
          <h2>{schoolName}</h2>
        </div>
        <h4>{degree}</h4>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default School;
