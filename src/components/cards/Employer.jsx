import React from 'react';
import BaseCard from './BaseCard';

const Employer = (props) => {
  const {
    employerName,
    jobTitle,
    start,
    end = 'present',
    description,
    children,
  } = props;
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
          margin: '15px',
        }}
      >
        <p>{description}</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {children}
        </div>
      </div>
    </BaseCard>
  );
};

export default Employer;
