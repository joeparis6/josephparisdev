import React from 'react';
import Employer from '../components/cards/Employer';

const Experience = () => {
  return (
    <div>
      <h3>Experience</h3>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Employer
          employerName={'Lion Energy'}
          jobTitle={'Intermediate Software Engineer'}
          start={'September 2024'}
          imgSrc={'logos/lion.png'}
        />
        <Employer
          employerName={'Lion Energy'}
          jobTitle={'Junior Web Developer'}
          start={'January 2023'}
          end={'September 2024'}
          imgSrc={'logos/lion.png'}
        />
        <Employer
          employerName={'LeGrand North America'}
          jobTitle={'Software QA Intern'}
          start={'May 2022'}
          end={'November 2022'}
          imgSrc={'logos/legrand.png'}
        />
        <Employer
          employerName={'BYU Center For Teaching and Learning'}
          jobTitle={'Web Developer'}
          start={'April 2021'}
          end={'November 2022'}
          imgSrc={'logos/byu.png'}
        />
      </div>
    </div>
  );
};

export default Experience;
