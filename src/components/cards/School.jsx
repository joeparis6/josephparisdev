import React from 'react';
import BaseCard from './BaseCard';

const School = (props) => {
  const { schoolName, degree, year } = props;
  return (
    <BaseCard header={schoolName}>
      <h4>{degree}</h4>
      <h4>{year}</h4>
    </BaseCard>
  );
};

export default School;
