import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItems from '../Components/CartItems/CartItems';
import './Cart.css'; // Import CSS for button styling

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <CartItems />

      <div className="checkout-container">
        <button className="checkout-btn" onClick={() => navigate('/checkout')}>
          🛍️ Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
