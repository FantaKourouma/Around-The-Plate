import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getRecipes } from '../services/recipeApi';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      fetchRecipes(query);
    }
  }, [searchParams]);

  const fetchRecipes = async (query) => {
    try {
      setLoading(true);
      const data = await getRecipes(query);
      setRecipes(data.results);
    } catch (err) {
      setError('Failed to fetch recipes');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p>{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
