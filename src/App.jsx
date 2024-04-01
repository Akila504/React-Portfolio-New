import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home.jsx'
import Navbar from './components/navbar.jsx'
import About from './Pages/About.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </Router>
  );
}


export default App;
