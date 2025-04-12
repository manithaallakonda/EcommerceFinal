import React from 'react';
import './SearchFilter.css';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="🔍 Search for products..."
      className="search-bar"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
