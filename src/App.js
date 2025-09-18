// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import AboutMe from './About_me';
import HireMe from './HireMe';
import Projects from './projects';
import Resume from './resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Hireme" element={<HireMe />} />
        <Route path="/Projects" element={<Projects/>} />
      </Routes>
    </Router>
  );
}

export default App;
