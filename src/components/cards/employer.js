import React from 'react';
import BaseCard from './BaseCard';

const Employer = (props) => {
  const {
    employerName,
    jobTitle,
    start,
    end = 'present',
    imgSrc = 'logos/briefcase.png',
  } = props;
  return (
    <BaseCard header={employerName}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h4>{jobTitle}</h4>
          <h4>{`${start} - ${end}`}</h4>
        </div>
        <div>
          <img src={imgSrc} />
        </div>
      </div>
    </BaseCard>
  );
};

export default Employer;
