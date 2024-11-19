import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';

const Layout = () => {
  const { setTheme, theme } = React.useContext(ThemeContext);

  return (
    <div className={theme}>
      <nav>
        <div className="Navbar">
          <div className="Button-Group">
            <Link to="/">
              <button>
                <h4>Home</h4>
              </button>
            </Link>
            <Link to="/experience">
              <button>
                <h4>Experience</h4>
              </button>
            </Link>
            <Link to="/education">
              <button>
                <h4>Education</h4>
              </button>
            </Link>
            <Link to="skills">
              <button>
                <h4>Skills</h4>
              </button>
            </Link>
            <Link to="goals">
              <button>
                <h4>Goals</h4>
              </button>
            </Link>
          </div>
          <div className="iconButton">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <img src={'/icons/mode.png'} className="imageButton" />
            </button>
          </div>
        </div>
      </nav>
      <div className="App-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
