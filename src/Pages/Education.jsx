import React from 'react';
import School from '../components/cards/School';
import BYU from '../svgs/BYU';
import PageHeader from '../components/text/PageHeader';

const Education = () => {
  return (
    <>
      <PageHeader>
        <h3>Education</h3>
      </PageHeader>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <School
          schoolName={'Brigham Young University'}
          degree={'B.S. Computer Science '}
          year={'2022'}
          summary={`As a student at Brigham Young University, I learned not only the
            essentials of programming, but also deeper concepts such as software
            design principles, applications of data structures, and designing
            delightful user experiences. More importantly, I learned to embrace
            challenge and new opportunities to learn. My growth mindset allows
            me to thrive when adapting to new technologies and dynamic processes.`}
        >
          <BYU />
        </School>
      </div>
    </>
  );
};
export default Education;
