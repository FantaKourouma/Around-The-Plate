import api from './config';

export const getRecipes = async (query) => {
  try {
    console.log('Sending request for query:', query);
    const response = await api.get(`/spoonacular/search`, {
      params: { 
        query,
        number: 9,
        addRecipeInformation: true 
      }
    });
    
    console.log('Raw response:', response);
    
    // Parse the response if it's a string
    const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
    console.log('Parsed API Response:', data);
    
    if (!data || !data.results) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response from server');
    }
    
    return data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Error response:', error.response.data);
      throw new Error(error.response.data.error || 'Failed to fetch recipes');
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
      throw new Error('No response from server');
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request:', error.message);
      throw new Error('Error setting up request');
    }
  }
};

// Mock data function
const getMockRecipes = (query) => {
  const mockRecipes = [
    {
      id: 1,
      title: "Classic Margherita Pizza",
      image: "https://images.unsplash.com/photo-1499778003268-cbafc6d08bab?fm=jpg",
      readyInMinutes: 30,
      servings: 4,
      vegetarian: true,
      vegan: false,
      glutenFree: false
    },
    {
      id: 2,
      title: "Pepperoni Pizza",
      image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8&w=1000&q=80", 
      readyInMinutes: 35,
      servings: 4,
      vegetarian: false,
      vegan: false,
      glutenFree: false
    },
    {
      id: 3,
      title: "Vegetarian Supreme Pizza",
      image: "https://th.bing.com/th/id/OIP.rvnL8HM0CY_mM75QQQr2rwHaE8?rs=1&pid=ImgDetMain",
      readyInMinutes: 40,
      servings: 6,
      vegetarian: true,
      vegan: true,
      glutenFree: false
    }
  ];

  // Filter recipes based on search query
  return mockRecipes.filter(recipe => 
    recipe.title.toLowerCase().includes(query.toLowerCase())
  );
};

// Function to fetch recipe details by ID
export const getRecipeDetails = async (id) => {
  try {
    const response = await api.get(`/spoonacular/${id}`);
    const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
    return data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

