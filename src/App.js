import React, { useState } from "react";
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import Work from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import ayalogo from './images/ayalogo.png';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">
            <img src={ayalogo} alt="A Logo" />
          </div>

          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><NavLink to="/" end onClick={() => setIsOpen(false)}>HOME</NavLink></li>
            <li><NavLink to="/About" onClick={() => setIsOpen(false)}>ABOUT</NavLink></li>
            <li><NavLink to="/Work" onClick={() => setIsOpen(false)}>WORKS</NavLink></li>
            <li><NavLink to="/Contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink></li>
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>&copy; 2025 Aya Barrera | All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
