import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import wishlist_icon from '../Assets/wishlist_icon.png'; // ✅ Wishlist Icon
import nav_dropdown from '../Assets/nav_dropdown.png';
import { ShopContext } from '../../Context/ShopContext';
import { ThemeContext } from '../../Context/ThemeContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const menuRef = useRef();
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    menuRef.current.classList.toggle('nav-menu-visible');
    dropdownRef.current.classList.toggle('open');
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    navigate('/');
  };

  return (
    <div className={`nav ${theme === "dark" ? "dark-theme" : ""}`}>
      <Link to='/' onClick={() => setMenu("shop")} className="nav-logo">
        <img src={logo} alt="Trendora" />
        <p>Trendora</p>
      </Link>

      {/* Mobile Dropdown Toggle */}
      <img
        ref={dropdownRef}
        onClick={toggleDropdown}
        className='nav-dropdown'
        src={nav_dropdown}
        alt="menu toggle"
      />

      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to='/'>Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to='/mens'>Men</Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to='/womens'>Women</Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids'>Kids</Link>
          {menu === "kids" && <hr />}
        </li>
        <li onClick={() => setMenu("about")}>
          <Link to='/about'>About</Link>
          {menu === "about" && <hr />}
        </li>
        <li onClick={() => setMenu("contact")}>
          <Link to='/contact'>Contact</Link>
          {menu === "contact" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {localStorage.getItem('auth-token') ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to='/login'>
            <button>Login</button>
          </Link>
        )}

        {/* ✅ Wishlist button with badge */}
        <Link to="/wishlist" style={{ position: 'relative' }}>
          <img src={wishlist_icon} alt="Wishlist" />
          <div className="nav-wishlist-count">3</div> {/* Replace 3 with actual wishlist count */}
        </Link>

        {/* 🛒 Cart button with badge */}
        <Link to="/cart" style={{ position: 'relative' }}>
          <img src={cart_icon} alt="Cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
