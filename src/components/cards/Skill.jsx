import React from 'react';
import BaseCard from './BaseCard';

const Skill = (props) => {
  const { skillName, children } = props;
  return <BaseCard header={skillName}>{children}</BaseCard>;
};

export default Skill;
