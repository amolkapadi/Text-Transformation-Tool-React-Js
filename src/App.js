import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  // Handler functions for each button
  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleReverse = () => {
    setText(text.split('').reverse().join(''));
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="app">
      <div className="card">
        <h2>Text Transformer</h2>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        ></textarea>
        <div className="button-row">
          <button onClick={handleUppercase}>Uppercase</button>
          <button onClick={handleLowercase}>Lowercase</button>
          <button onClick={handleReverse}>Reverse</button>
          <button onClick={handleClear}>Clear Text</button>
        </div>
      </div>
    </div>
  );
}

export default App;
