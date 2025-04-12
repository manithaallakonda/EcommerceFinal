import React from 'react';
import './SearchFilter.css';

const SearchFilter = ({ searchQuery, setSearchQuery, filters, setFilters }) => {
  const handlePriceChange = (e) => {
    const value = e.target.value;
    setFilters({ ...filters, priceRange: [0, Number(value)] });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="🔍 Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      <div className="filter-group">
        <label>Max Price: ₹{filters.priceRange[1]}</label>
        <input
          type="range"
          min="100"
          max="10000"
          step="100"
          value={filters.priceRange[1]}
          onChange={handlePriceChange}
        />
      </div>

      <div className="filter-group">
        <label>Category:</label>
        <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kid">Kids</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;
