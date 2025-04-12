import React, { useContext, useState } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import cross_icon from "../Assets/cart_cross_icon.png";
import { backend_url, currency } from "../../App";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validPromoCodes = {
    FREE50: 0.5,
    SAVE10: 0.1,
    BIGSAVE: 0.25,
  };

  const handlePromoCode = () => {
    const trimmedCode = promoCode.toUpperCase().trim();
    if (getTotalCartAmount() > 4000 && trimmedCode === "DISCOUNT1000") {
      setDiscount(1000);
    } else if (validPromoCodes[trimmedCode]) {
      const percent = validPromoCodes[trimmedCode];
      setDiscount(getTotalCartAmount() * percent);
    } else {
      setDiscount(0);
      alert("Invalid or inapplicable promo code");
    }
  };

  const handleCheckout = () => {
    if (getTotalCartAmount() === 0) {
      alert("Your cart is empty!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/confirmation");
    }, 1500);
  };

  const discountedTotal = Math.max(0, getTotalCartAmount() - discount);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-header">
        <span>Product</span>
        <span>Name</span>
        <span>Price</span>
        <span>Qty</span>
        <span>Total</span>
        <span>Remove</span>
      </div>
      <hr />

      {products.map(product => {
        const quantity = cartItems[product.id] || 0;
        if (quantity === 0) return null;

        return (
          <div className="cart-item" key={product.id}>
            <img src={backend_url + product.image} alt={product.name} className="product-img" />
            <span>{product.name}</span>
            <span>{currency}{product.new_price.toFixed(2)}</span>
            <span>{quantity}</span>
            <span>{currency}{(product.new_price * quantity).toFixed(2)}</span>
            <img
              src={cross_icon}
              alt="Remove"
              className="remove-btn"
              onClick={() => removeFromCart(product.id)}
            />
          </div>
        );
      })}

      <div className="summary-section">
        <div className="promo-code">
          <input
            type="text"
            placeholder="Enter Promo Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button onClick={handlePromoCode}>Apply</button>
        </div>

        <div className="totals">
          <p>Subtotal: <strong>{currency}{getTotalCartAmount().toFixed(2)}</strong></p>
          <p>Discount: <strong>- {currency}{discount.toFixed(2)}</strong></p>
          <p className="grand-total">Total: <strong>{currency}{discountedTotal.toFixed(2)}</strong></p>
          <button
            className="checkout-btn"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;