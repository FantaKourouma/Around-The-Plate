import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Around the Plate</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/meal-planner">Meal Planner</Link></li>
          </ul>
          <div className="nav-auth">
            <button onClick={toggleDarkMode} className="theme-toggle">
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Link to="/auth" className="auth-link">
              <i className="fas fa-user-circle"></i>
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



