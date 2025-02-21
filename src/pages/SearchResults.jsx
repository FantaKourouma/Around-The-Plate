import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Safely access location state with fallback values
  const { recipes = [], query = '' } = location.state || {};

  useEffect(() => {
    if (!location.state) {
      navigate('/');
      return;
    }
    setLoading(false);
  }, [location.state, navigate]);

  if (loading) {
    return (
      <div className="search-results">
        <div className="loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="search-header">
        <div className="container">
          <Link to="/" className="back-button">
            <i className="fas fa-arrow-left"></i> Back to Search
          </Link>
          <h2 className="results-title">Search Results</h2>
          <p className="results-count">
            Found {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} for "{query}"
          </p>
        </div>
      </div>

      <div className="container py-5">
        {recipes.length > 0 ? (
          <div className="recipes-grid">
            {recipes.map((recipe, index) => (
              <div key={recipe.id} className="recipe-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="recipe-image">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/placeholder-recipe.jpg';
                    }}
                  />
                  {recipe.vegetarian && (
                    <span className="recipe-badge vegetarian" title="Vegetarian">
                      <i className="fas fa-leaf"></i>
                    </span>
                  )}
                </div>
                <div className="recipe-content">
                  <h3>{recipe.title}</h3>
                  <div className="recipe-details">
                    {recipe.readyInMinutes && (
                      <span title="Preparation Time">
                        <i className="fas fa-clock"></i>
                        {recipe.readyInMinutes} mins
                      </span>
                    )}
                    {recipe.servings && (
                      <span title="Servings">
                        <i className="fas fa-user-friends"></i>
                        {recipe.servings} servings
                      </span>
                    )}
                    {recipe.healthScore && (
                      <span className="health-score" title="Health Score">
                        <i className="fas fa-heart"></i>
                        {recipe.healthScore}%
                      </span>
                    )}
                  </div>
                  <div className="recipe-tags">
                    {recipe.vegetarian && <span className="tag vegetarian">Vegetarian</span>}
                    {recipe.vegan && <span className="tag vegan">Vegan</span>}
                    {recipe.glutenFree && <span className="tag gluten-free">Gluten Free</span>}
                    {recipe.dairyFree && <span className="tag dairy-free">Dairy Free</span>}
                  </div>
                  <a
                    href={recipe.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-recipe-btn"
                  >
                    View Recipe <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <p>No recipes found for "{query}". Try another search!</p>
            <Link to="/" className="view-recipe-btn">
              Back to Search
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;