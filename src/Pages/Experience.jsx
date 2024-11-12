import React from 'react';
import Employer from '../components/cards/employer';

const Experience = () => {
  return (
    <>
      <h3>Experience</h3>
      <Employer
        employerName={'Lion Energy'}
        jobTitle={'Intermediate Software Engineer'}
        start={'September 2024'}
      />
      <Employer
        employerName={'Lion Energy'}
        jobTitle={'Junior Web Developer'}
        start={'January 2023'}
        end={'August 2024'}
      />
      <Employer
        employerName={'LeGrand North America'}
        jobTitle={'Software QA Intern'}
        start={'May 2022'}
        end={'November 2022'}
      />
      <Employer
        employerName={'BYU Center For Teaching and Learning'}
        jobTitle={'Web Developer'}
        start={'April 2021'}
        end={'November 2022'}
      />
    </>
  );
};

export default Experience;
