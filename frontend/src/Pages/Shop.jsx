import React, { useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import SearchFilter from '../Components/SearchFilter/SearchFilter';
import './Shop.css';

const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 10000],
    category: '',
    brand: '',
    sortBy: '',
  });

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((res) => res.json())
      .then((data) => setPopular(data));

    fetch('http://localhost:4000/newcollections')
      .then((res) => res.json())
      .then((data) => setNewCollection(data));
  }, []);

  // 💡 Filter logic
  const filteredData = popular.filter((item) => {
    const matchName = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = filters.category ? item.category === filters.category : true;
    const matchBrand = filters.brand ? item.brand === filters.brand : true;
    const matchPrice = item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchName && matchCategory && matchBrand && matchPrice;
  });

  return (
    <div className="shop-page">
      <Hero />

      {/* 🔍 Centered Search and Filters */}
      <div className="shop-search-filter-wrapper">
        <SearchFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      {/* 🛍 Filtered Products */}
      <div className="shop-products">
        <Popular data={filteredData} />
      </div>

      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
