// import React, { useState, useEffect } from 'react';
// import { fetchRecipes } from '../services/api';

// function RecipeList() {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const loadRecipes = async () => {
//       try {
//         const response = await fetchRecipes();
//         setRecipes(response.data);
//       } catch (error) {
//         console.error('Failed to fetch recipes:', error);
//       }
//     };
    
//     loadRecipes();
//   }, []);

//   return (
//     <div>
//       {recipes.map((recipe) => (
//         <div key={recipe.id}>
//           <h2>{recipe.title}</h2>
//           {/* Add more recipe details as needed */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RecipeList; 