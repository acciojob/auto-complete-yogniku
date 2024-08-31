import React, { useEffect, useState } from 'react';

const SimpleFruitAutocomplete = () => {
  const [input, setInput] = useState(''); // Input should be a string
  const [suggestions, setSuggestions] = useState([]); // Suggestions should be an array

  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  useEffect(() => {
    if (input === '') {
      setSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    const filteredFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filteredFruits); // Set the filtered list to suggestions
  }, [input]);

  return (
    <div>
      <h1>Search item</h1>
      <input 
        type="text"
        placeholder="Enter item to search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SimpleFruitAutocomplete;
