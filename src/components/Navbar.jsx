import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#a4cdf9' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">World Recipes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/meal-planner">Meal Planner</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/auth">Sign In/Sign Up</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


