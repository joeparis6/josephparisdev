import React from 'react';
import BaseCard from '../components/cards/BaseCard';

const Goals = () => {
  return (
    <>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <BaseCard header={'My Goals'}>
          <p>
            As a software engineer, I aspire to produce high quality
            applications that provide users with a sense of efficiency, ease,
            and delight. Equally important for me is adherence to proven
            architectural and design principles that ensure code I write is
            clean, readable, extendable, and maintainable.
          </p>
        </BaseCard>
      </div>
    </>
  );
};

export default Goals;
