import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedRecipes from './components/FeaturedRecipes';
import MealPlanner from './components/MealPlanner';
import AuthPage from './components/AuthPage';
import SearchResults from './pages/SearchResults';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import './styles/darkMode.css';

// Configure axios with your backend URL
axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.withCredentials = true;

const AppContent = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><HeroSection /><FeaturedRecipes /></>} />
          <Route path="/meal-planner" element={<MealPlanner />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/search-results" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;




