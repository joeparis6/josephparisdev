import React from 'react';
import Employer from '../components/cards/Employer';
import LionEnergy from '../svgs/LionEnergy';
import Legrand from '../svgs/Legrand';
import BYU from '../svgs/BYU';

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
          description={
            'As a web developer in the Energy Storage System industry, I learned to interface with a variety of cloud services to facilitate communication with IoT devices.'
          }
        >
          <LionEnergy />
        </Employer>
        <Employer
          employerName={'Lion Energy'}
          jobTitle={'Junior Web Developer'}
          start={'January 2023'}
          end={'September 2024'}
          description={
            'As a web developer in the Energy Storage System industry, I learned to interface with a variety of cloud services to facilitate communication with IoT devices.'
          }
        >
          <LionEnergy />
        </Employer>
        <Employer
          employerName={'Legrand North America'}
          jobTitle={'Software QA Intern'}
          start={'May 2022'}
          end={'November 2022'}
          description={
            'As a Software Quality Assurance Engineer I applied the principles of unit testing and test design to ensure product quality for a home-automation mobile application.'
          }
        >
          <Legrand />
        </Employer>
        <Employer
          employerName={'BYU Center For Teaching and Learning'}
          jobTitle={'Web Developer'}
          start={'April 2021'}
          end={'November 2022'}
          description={
            'My first experience with web development was designing and building custom applications for BYU academic programs. These projects exposed me to every aspect of the software design life cycle.'
          }
        >
          <BYU />
        </Employer>
      </div>
    </div>
  );
};

export default Experience;
