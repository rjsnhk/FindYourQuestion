import { useState, useEffect } from 'react';
import { searchQuestions } from './services/searchService';
import axios from 'axios';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [allQuestions, setAllQuestions] = useState([]);

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
      setAllQuestions(questions);
    } catch (error) {
      console.error('Error searching questions:', error);
      setErrorMessage('Error searching questions');
    }
  };

  useEffect(() => {
    if (selectedType === 'All') {
      setResults(allQuestions);
    } else {
      const filtered = allQuestions.filter((q) => q.type === selectedType);
      setResults(filtered);
    }
  }, [selectedType, allQuestions]);

  useEffect(() => {
    if (query.trim() === '') {
      setErrorMessage('');
      setAllQuestions([]);
      setResults([]);
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
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="filter-container">
        <label>Filter by Type:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Questions</option>
          <option value="MCQ">MCQ</option>
          <option value="READ_ALONG">Read Along</option>
          <option value="CONTENT_ONLY">Content Only</option>
          <option value="ANAGRAM">Anagram</option>
        </select>
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
