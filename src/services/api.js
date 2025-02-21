import axios from 'axios';

export const fetchRecipes = () => axios.get('/api/recipes');
export const createMealPlan = (data) => axios.post('/api/meal-plans', data);
// Add more API functions as needed