import axios from 'axios';

export const searchQuestions = async (query, type) => {
  try {
    const response = await axios.post('/api/search', { query, type });  // Send query and type to backend
    return response.data.questions;
  } catch (error) {
    throw new Error('Error searching questions: ' + error.message);
  }
};
