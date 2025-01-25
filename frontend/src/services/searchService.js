import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

export const searchQuestions = async (query) => {
  try {
    const response = await axios.post('/api/search', { query });
    return response.data.questions || [];
  } catch (error) {
    console.error('Failed to fetch questions:', error.message);
    throw new Error('Could not fetch questions.');
  }
};
