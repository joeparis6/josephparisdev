import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Education from './Pages/Education';
import Experience  from './Pages/Experience';
import Goals from './Pages/Goals';
import Skills from './Pages/Skills';
import Layout from './Pages/Layout';

function App() {
  return (
    <div className="App">
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
