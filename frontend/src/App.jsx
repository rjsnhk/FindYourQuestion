import { useState } from 'react';
import { searchQuestions } from './services/searchService';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return; // Prevent empty queries

    try {
      const questions = await searchQuestions(query);
      setResults(questions);
    } catch (error) {
      console.error('Error while searching questions:', error);
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for questions..."
        />
         {query.trim() && (
          <button onClick={handleSearch}>Search</button>
        )}
      </div>

      <ul className="results-list">
        {results.map((question) => (
          <li key={question.id}>
            <h3>{question.title}</h3>
            <p>Type: {question.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
