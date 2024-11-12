import React from 'react';
import Hyperlink from '../components/text/hyperlink';

const Home = () => {
  return (
    <header className="App-header">
      <h2>Joseph Paris</h2>
      <h5>Software Engineer</h5>
      <div className="Resume">
        <div className="Resume-item">
          <h5>Education</h5>
          <ul>
            <li>BS Computer Science - Brigham Young University 2022</li>
          </ul>
        </div>
        <div className="Resume-item">
          <h5>Experience</h5>
          <ul>
            <li>
              Intermediate Full Stack Developer @ Lion Energy September 2024 -
              Present
            </li>
            <li>Junior Developer @ Lion Energy Jan 2023 - September 2024</li>
            <li>
              Software QA Intern @ Legrand North America May 2022 - November
              2022
            </li>
          </ul>
        </div>
        <div className="Resume-item">
          <h5>Connect</h5>
          <ul>
            <li>
              <Hyperlink
                url={'josephparis6@gmail.com'}
                displayText={'Email'}
                isEmail
              />
            </li>
            <li>
              <Hyperlink
                url={'https://www.linkedin.com/in/joseph-paris-1891a1229/'}
                displayText={'LinkedIn'}
              />
            </li>
            <li>
              <Hyperlink
                url={'https://github.com/joeparis6'}
                displayText={'Github'}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Home;
