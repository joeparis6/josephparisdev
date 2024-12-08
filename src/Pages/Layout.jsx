import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/themeContext';
import NavButton from '../components/buttons/NavButton';

const Layout = () => {
  const { setTheme, theme } = React.useContext(ThemeContext);

  return (
    <div className={theme}>
      <nav>
        <div className="Navbar">
          <div className="buttonGroup">
            <NavButton to={'/'} label={'Home'} />
            <NavButton to={'/experience'} label={'Experience'} />
            <NavButton to={'/education'} label={'Education'} />
            <NavButton to={'/skills'} label={'Skills'} />
            <NavButton to={'/goals'} label={'Goals'} />
          </div>
          <div className="iconButton">
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <img
                src={
                  theme === 'light'
                    ? '/icons/dark-mode.png'
                    : '/icons/light-mode.png'
                }
                className="imageButton"
              />
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
