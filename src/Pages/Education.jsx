import React from 'react';
import School from '../components/cards/school';

const Education = () => {
  return (
    <>
      <h3>Education</h3>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <School
          schoolName={'Brigham Young University'}
          degree={'B.S. Computer Science '}
          year={'2022'}
        />
      </div>
    </>
  );
};
export default Education;
