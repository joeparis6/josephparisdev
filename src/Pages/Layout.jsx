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
              <button>Home</button>
            </Link>
            <Link to="/experience">
              <button>Experience</button>
            </Link>
            <Link to="/education">
              <button>Education</button>
            </Link>
            <Link to="skills">
              <button>Skills</button>
            </Link>
            <Link to="goals">
              <button>Goals</button>
            </Link>
          </div>
          <div>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <img src={'/icons/mode.png'} />
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
