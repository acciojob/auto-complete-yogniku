import React, { useEffect, useState } from 'react';

const SimpleFruitAutocomplete = () => {
    const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [input, setInput] = useState(''); // Input should be a string
  const [suggestions, setSuggestions] = useState([...fruits]); // Suggestions should be an array

  

  useEffect(() => {
   

    const filteredFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(input.toLowerCase())
    );
   if (filteredFruits.length>0) {
    setSuggestions(filteredFruits); // Set the filtered list to suggestions

   }
    
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
