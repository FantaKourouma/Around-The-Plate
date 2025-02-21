import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getRecipes = async (query) => {
  try {
    const response = await api.get(`/recipes/search`, {
      params: { query }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeDetails = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
}; 