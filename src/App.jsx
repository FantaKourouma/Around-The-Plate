import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedRecipes from './components/FeaturedRecipes';
import MealPlanner from './components/MealPlanner';
import AuthPage from './components/AuthPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><HeroSection /><FeaturedRecipes /></>} />
        <Route path="/meal-planner" element={<MealPlanner />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
};

export default App;




