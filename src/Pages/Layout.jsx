import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from '../context/themeContext';

const Layout = () => {
  const {setTheme} = React.useContext(ThemeContext);
  return (
    <div className="App">
        <nav>
          <div className="Navbar">
            <div className='Button-group'>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/experience">
              <button>Experience</button>
            </Link>
            <Link to="/education">
                <button>Education</button>
            </Link>
            <Link to='skills'>
                <button>Skills</button>
                </Link>
            <Link to='goals'>
                <button>Goals</button>
            </Link>
            </div>
            <button onClick={() => setTheme('light')}>
              theme
            </button>
            <button>
                login
            </button>
          </div>
        </nav>
        <div className='App-content'>
          <Outlet />  
        </div>
        
    </div>
  )
}

export default Layout;
