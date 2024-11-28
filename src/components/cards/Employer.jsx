import React from 'react';
import BaseCard from './BaseCard';

const Employer = (props) => {
  const { employerName, jobTitle, start, end = 'present', children } = props;
  return (
    <BaseCard header={employerName} subHeader={`${start} - ${end}`}>
      <div>
        <h4>{jobTitle}</h4>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p>Description</p>
        {children}
      </div>
    </BaseCard>
  );
};

export default Employer;
