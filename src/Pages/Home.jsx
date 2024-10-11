import React from 'react';

const Home = () => {
  return (
    <header className="App-header">
      <h2>Joseph Paris</h2>
      <h5>Web Developer</h5>
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
            <li>Junior Developer @ Lion Energy Jan 2023 - September 2024</li>
            <li>
              Intermediate Full Stack Developer @ Lion Energy September 2024 -
              Present
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Home;
