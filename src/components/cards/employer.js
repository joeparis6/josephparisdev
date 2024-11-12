import React from 'react';

const Employer = (props) => {
  const { employerName, jobTitle, start, end = 'present' } = props;
  return (
    <div className="employer">
      <h4>{employerName}</h4>
      <h6>{jobTitle}</h6>
      <h6>{`${start} - ${end}`}</h6>
    </div>
  );
};

export default Employer;
