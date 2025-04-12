import React from 'react';

const ConfirmationStep = ({ next, prev, formData }) => (
  <div className="form-box">
    <h2>📝 Confirm Details</h2>
    <ul>
      <li><strong>Name:</strong> {formData.name}</li>
      <li><strong>Email:</strong> {formData.email}</li>
      <li><strong>Address:</strong> {formData.address}, {formData.city} - {formData.zip}</li>
      <li><strong>Card:</strong> **** **** **** {formData.cardNumber.slice(-4)}</li>
    </ul>
    <div className="btn-group">
      <button className="back-btn" onClick={prev}>⬅️ Back</button>
      <button className="next-btn" onClick={next}>Confirm ✅</button>
    </div>
  </div>
);
export default ConfirmationStep;
