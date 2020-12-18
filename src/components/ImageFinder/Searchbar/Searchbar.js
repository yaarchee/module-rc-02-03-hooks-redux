import React, { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [targetValue, setTargetValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(targetValue);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          value={targetValue}
          placeholder="Search images and photos"
          onChange={({ target }) => setTargetValue(target.value)}
        />
      </form>
    </header>
  );
}
