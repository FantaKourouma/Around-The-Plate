import axios from 'axios';

const API_KEY = '55742e63c8374617bf1cb8338ba43c24';
const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';

// Function to fetch recipes based on a search query
export const getRecipes = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        query: query,
        apiKey: API_KEY,
      },
    });
    return response.data.results;  // Returns the recipe results
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

