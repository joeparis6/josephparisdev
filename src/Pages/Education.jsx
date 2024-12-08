import React from 'react';
import School from '../components/cards/School';
import TextFrame from '../components/text/TextFrame';

const Education = () => {
  return (
    <>
      <TextFrame>
        <h3>Education</h3>
      </TextFrame>

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
