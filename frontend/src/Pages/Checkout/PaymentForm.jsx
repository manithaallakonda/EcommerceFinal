import React from 'react';

const PaymentForm = ({ next, prev, handleChange, formData }) => (
  <div className="form-box">
    <h2>💳 Payment Info</h2>
    <input name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} />
    <input name="expiry" placeholder="Expiry (MM/YY)" value={formData.expiry} onChange={handleChange} />
    <input name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} />
    <div className="btn-group">
      <button className="back-btn" onClick={prev}>⬅️ Back</button>
      <button className="next-btn" onClick={next}>Next ➡️</button>
    </div>
  </div>
);
export default PaymentForm;
