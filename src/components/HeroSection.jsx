import React, { useState } from 'react'; 
import { getRecipes } from '../api/recipeApi'; // Import your API function

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  const [recipes, setRecipes] = useState([]); // State to hold fetched recipes

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      const result = await getRecipes(searchQuery);  // Fetch recipes based on the search
      setRecipes(result);  // Store the fetched recipes in state
    }
  };

  return (
    <header className="hero-section text-center p-5 d-flex flex-column align-items-center justify-content-center text-white">
      <div className="container">
        <h1 className="display-4 fw-bold">Around the Plate</h1>
        <p className="lead">Search for your favorite dishes.</p>

        {/* Search Bar */}
        <div className="search-bar w-50 mx-auto mt-4">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Search for recipes..."
            value={searchQuery}  // Bind the input value to state
            onChange={(e) => setSearchQuery(e.target.value)}  // Update state on change
          />
          <button
            className="btn btn-primary rounded-pill mt-2"
            onClick={handleSearch}  // Call handleSearch when clicked
          >
            Search
          </button>
        </div>

        {/* Display Recipes */}
        <div className="recipes mt-4">
          {recipes.length > 0 ? (
            <div>
              {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-item">
                  <h3>{recipe.title}</h3>
                  <img src={recipe.image} alt={recipe.title} width={200} />
                  <p>{recipe.summary}</p>
                  <a
                    href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Recipe
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>No recipes found. Try searching with different terms!</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;




