import React from 'react';
import BaseCard from './BaseCard';

const School = (props) => {
  const { schoolName, degree, year, summary, children } = props;
  return (
    <BaseCard header={schoolName}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '15px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <h4>{degree}</h4>
          <h4>{year}</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {children}
        </div>
      </div>
      <p>{summary}</p>
    </BaseCard>
  );
};

export default School;
