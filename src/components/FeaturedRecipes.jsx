import React from 'react';
import './FeaturedRecipes.css';

const FeaturedRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg",
      readyInMinutes: 30,
      servings: 4,
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      sourceUrl: "#"
    },
    {
      id: 2,
      title: "Vegetarian Buddha Bowl",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      readyInMinutes: 25,
      servings: 2,
      vegetarian: true,
      vegan: true,
      glutenFree: true,
      dairyFree: true,
      sourceUrl: "#"
    },
    {
      id: 3,
      title: "Grilled Chicken Salad",
      image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
      readyInMinutes: 20,
      servings: 3,
      vegetarian: false,
      vegan: false,
      glutenFree: true,
      dairyFree: true,
      sourceUrl: "#"
    }
  ];

  return (
    <section className="featured-recipes">
      <div className="container">
        <h2 className="section-title">Featured Recipes</h2>
        <p className="section-subtitle">Our most popular dishes</p>
        
        <div className="recipes-grid">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.title} />
                <div className="recipe-type-badge">
                  {recipe.vegetarian ? 'Vegetarian' : 'Non-Veg'}
                </div>
              </div>
              <div className="recipe-content">
                <h4>{recipe.title}</h4>
                <div className="recipe-info">
                  <span><i className="fas fa-clock"></i> {recipe.readyInMinutes} mins</span>
                  <span><i className="fas fa-user-friends"></i> {recipe.servings} servings</span>
                </div>
                <div className="recipe-tags">
                  {recipe.vegetarian && <span className="tag vegetarian">Vegetarian</span>}
                  {recipe.vegan && <span className="tag vegan">Vegan</span>}
                  {recipe.glutenFree && <span className="tag gluten-free">Gluten Free</span>}
                  {recipe.dairyFree && <span className="tag dairy-free">Dairy Free</span>}
                </div>
                <button className="view-recipe-btn">View Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;

