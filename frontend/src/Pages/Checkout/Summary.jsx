import React from 'react';

const Summary = ({ formData }) => (
  <div className="form-box">
    <h2>🎉 Thank You!</h2>
    <p>Your order has been placed successfully!</p>
    <p>A confirmation email has been sent to <strong>{formData.email}</strong></p>
  </div>
);
export default Summary;
