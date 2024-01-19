import React from 'react';
import Home  from './Home';
import Education from './Education'
import Experience from './Experience';
import Projects from './Projects';
import './App.css';
import Navbar from './Navbar';
import ProjectsT from './ProjectsT';
import { Route, Routes, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
    <Navbar />
      <div>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects2" element={<ProjectsT />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;