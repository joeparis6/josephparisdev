// import './App.css';
import './styles/dark.css'
import './styles/light.css'
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Education from './Pages/Education';
import Experience  from './Pages/Experience';
import Goals from './Pages/Goals';
import Skills from './Pages/Skills';
import Layout from './Pages/Layout';
import { ThemeContext } from './context/themeContext';

function App() {
  const {theme} = React.useContext(ThemeContext)
  console.log('theme', theme);
  return (
    <div className={theme}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="education" element={<Education/>}/>
            <Route path="experience" element={<Experience/>}/>
            <Route path="goals" element={<Goals/>}/>
            <Route path="skills" element={<Skills/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
