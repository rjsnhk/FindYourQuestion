import { useState, useEffect } from 'react';
import { searchQuestions } from './services/searchService';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.withCredentials = true;

  const handleSearch = async () => {
    try {
      const questions = await searchQuestions(query);
      if (questions.length === 0) {
        setErrorMessage('Question not found');
      } else {
        setErrorMessage('');
      }
      setResults(questions);
    } catch (error) {
      console.error('Error searching questions:', error);
      setErrorMessage('Error searching questions');
    }
  };

  // Reset error message when query is cleared
  useEffect(() => {
    if (query.trim() === '') {
      setErrorMessage('');
    }
  }, [query]);

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search here..."
        />
        {query.trim() && (
          <button onClick={handleSearch}>Search</button>
        )}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <ul>
        {results.map((questn) => (
          <li key={questn._id}>
            <h3>{questn.title}</h3>
            <p>Type: {questn.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
