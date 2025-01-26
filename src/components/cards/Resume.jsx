import React from 'react';
import LinkedIn from '../../svgs/LinkedIn';
import LogoLink from '../text/LogoLink';
import Github from '../../svgs/Github';
import Email from '../../svgs/Email';

const Resume = () => {
  return (
    <div className="Resume">
      <div className="Resume-item">
        <h4>Education</h4>
        <ul>
          <li>BS Computer Science - Brigham Young University 2022</li>
        </ul>
      </div>
      <div className="Resume-item">
        <h4>Experience</h4>
        <ul>
          <li>
            Intermediate Full Stack Developer @ Lion Energy September 2024 -
            Present
          </li>
          <li>Junior Developer @ Lion Energy Jan 2023 - September 2024</li>
          <li>
            Software QA Intern @ Legrand North America May 2022 - November 2022
          </li>
          <li>
            Student Web Developer @ Center for Teaching and Learning April 2021
            - November 2022
          </li>
        </ul>
      </div>
      <div className="Resume-item">
        <h4>Connect</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <LogoLink
            url={'josephparis6@gmail.com'}
            displayText={'Email'}
            logo={<Email />}
            isEmail
          />
          <LogoLink
            url={'https://www.linkedin.com/in/joseph-paris-1891a1229/'}
            displayText={'LinkedIn'}
            logo={<LinkedIn />}
          />
          <LogoLink
            url={'https://github.com/joeparis6'}
            displayText={'Github'}
            logo={<Github />}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
