import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home';
import Work from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import ayalogo from './images/ayalogo.png';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="logo">
            <img src={ayalogo} alt="A Logo" />
          </div>

          <ul className="nav-links">
            <li><NavLink to="/" end>HOME</NavLink></li>
            <li><NavLink to="/About">ABOUT</NavLink></li>
            <li><NavLink to="/Work">WORKS</NavLink></li>
            <li><NavLink to="/Contact">CONTACT</NavLink></li>
          </ul>
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
