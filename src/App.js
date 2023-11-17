import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <nav>
          <button>item 1</button>
          <button>item 2</button>
          <button>item 3</button>
          <button>item 4</button>
        </nav>
      </div>
      <header className="App-header">
        <h2>
          Joseph Paris
        </h2>
        <h5>
          Serverless Web Developer
        </h5>
        <div>
          <h5>
            Education
          </h5>
          <ul>
          <li>BS Computer Science - Brigham Young University 2022</li>
          </ul>
        </div>
        <div>
          <h5>
            Experience
          </h5>
          <ul>
          <li>Full Stack React Developer @ Lion Energy Jan 2023 - Present</li>
          </ul>
        </div>
      </header>
      
    </div>
  );
}

export default App;
