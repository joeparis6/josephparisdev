import React from 'react';
import School from '../components/cards/school';

const Education = () => {
  return (
    <>
      <h3>Education</h3>
      <School
        schoolName={'Brigham Young University'}
        degree={'B.S. Computer Science '}
        year={'2022'}
      />
    </>
  );
};
export default Education;
