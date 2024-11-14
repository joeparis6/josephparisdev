import React from 'react';

const Employer = (props) => {
  const {
    employerName,
    jobTitle,
    start,
    end = 'present',
    imgSrc = 'logos/briefcase.png',
  } = props;
  return (
    <div className="employer">
      <div className="baseCard">
        <div className="header">
          <h2>{employerName}</h2>
        </div>

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
      </div>
    </div>
  );
};

export default Employer;
