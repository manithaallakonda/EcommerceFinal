import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// Pages
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Confirmation from "./Pages/Confirmation";
import Wishlist from "./Pages/Wishlist"; // ✅ Wishlist Page
import OrderHistory from "./Pages/Profile/OrderHistory"; // ✅ Order History Page
import Checkout from "./Pages/Checkout/Checkout"; // ✅ Multi-Step Checkout Page

// Assets
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";

// Context
import { ThemeProvider, ThemeContext } from "./Context/ThemeContext";

// Constants
export const backend_url = 'http://localhost:4000';
export const currency = '₹';

// ✅ Theme-aware App Wrapper
function ThemedApp() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ Multi-Step Checkout route */}
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/profile/orders" element={<OrderHistory />} /> {/* ✅ Order History route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

// Wrap the whole app with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;
