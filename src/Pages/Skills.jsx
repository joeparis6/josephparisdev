import React from 'react';
import Skill from '../components/cards/Skill';

const Skills = () => {
  return (
    <>
      <h3>Skills</h3>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <Skill skillName={'Web Programming'}>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>NestJS</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </Skill>
        <Skill skillName={'Design & Styling'}>
          <ul>
            <li>CSS</li>
            <li>MUI</li>
            <li>Figma</li>
          </ul>
        </Skill>
        <Skill skillName={'Databases'}>
          <ul>
            <li>PostgreSQL</li>
            <li>AWS Timestream</li>
            <li>DynamoDB</li>
          </ul>
        </Skill>
        <Skill skillName={'AWS Cloud Services'}>
          <ul>
            <li>IoT Core</li>
            <li>S3</li>
            <li>Cognito</li>
            <li>Lambda</li>
          </ul>
        </Skill>
      </div>
    </>
  );
};

export default Skills;
