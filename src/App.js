import './App.css';

function App() {
  return (
    <div className="App">
      
        <nav>
          <div className="Navbar">
            <div className='Button-group'>
              <button>Experience</button>
              <button>Education</button>
              <button>Skills</button>
              <button>Goals</button>
            </div>
            <button>
                login
            </button>
          </div>
        </nav>
        
      
      <div className='App-content'>
        <header className="App-header">
        <h2>
          Joseph Paris
        </h2>
        <h5>
          Serverless Web Developer
        </h5>
        <div className='Resume'>
          <div className='Resume-item'>
          <h5>
            Education
          </h5>
          <ul>
          <li>BS Computer Science - Brigham Young University 2022</li>
          </ul>
        </div>
        <div className='Resume-item'>
          <h5>
            Experience
          </h5>
          <ul>
          <li>Full Stack React Developer @ Lion Energy Jan 2023 - Present</li>
          </ul>
        </div>
        </div>
        
      </header>
      </div>
      
      
      
    </div>
  );
}

export default App;
