import React from 'react';
import './SearchFilter.css';

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <div className="filter-sidebar">
      <h3>🧩 Filters</h3>
      <label>Price</label>
      <input type="range" min="0" max="5000" onChange={(e) => setFilters({ ...filters, price: e.target.value })} />

      <label>Category</label>
      <select onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
        <option value="">All</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kid">Kids</option>
      </select>

      <label>Sort by</label>
      <select onChange={(e) => setFilters({ ...filters, sort: e.target.value })}>
        <option value="">Default</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSidebar;
