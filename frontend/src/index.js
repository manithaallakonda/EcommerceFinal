// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 🛒 Context Providers
import ShopContextProvider from './Context/ShopContext';
import { WishlistProvider } from './Context/WishlistContext'; // ✅ Import Wishlist Context

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <WishlistProvider> {/* ✅ Wrap WishlistProvider inside ShopContextProvider */}
      <App />
    </WishlistProvider>
  </ShopContextProvider>
);
