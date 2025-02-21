import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRecipes } from '../api/recipeApi';
import './HeroSection.css';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const results = await getRecipes(searchQuery);
      
      if (!results || results.length === 0) {
        setError('No recipes found. Please try a different search term.');
        return;
      }

      navigate('/search-results', { state: { recipes: results, query: searchQuery } });
    } catch (err) {
      setError(err.message || 'Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Around the Plate</h1>
          <p>Discover delicious recipes from around the world</p>
        </div>

        <div className="search-section">
          <form onSubmit={handleSearch} className="search-form">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                disabled={loading}
              />
              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="loading-spinner">
                    <i className="fas fa-spinner fa-spin"></i>
                  </span>
                ) : (
                  <i className="fas fa-search"></i>
                )}
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}
          </form>

          <div className="popular-searches">
            <span>Popular:</span>
            <button onClick={() => setSearchQuery('pasta')}>Pasta</button>
            <button onClick={() => setSearchQuery('chicken')}>Chicken</button>
            <button onClick={() => setSearchQuery('vegetarian')}>Vegetarian</button>
            <button onClick={() => setSearchQuery('dessert')}>Dessert</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;




