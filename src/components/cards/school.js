import React from 'react';

const School = (props) => {
  const { schoolName, degree, year } = props;
  return (
    <div className="school">
      <h4>{schoolName}</h4>
      <h6>{degree}</h6>
      <h6>{year}</h6>
    </div>
  );
};

export default School;
