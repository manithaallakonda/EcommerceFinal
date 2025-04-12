import React from 'react';

const AddressForm = ({ next, handleChange, formData }) => (
  <div className="form-box">
    <h2>📬 Shipping Address</h2>
    <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
    <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
    <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
    <input name="city" placeholder="City" value={formData.city} onChange={handleChange} />
    <input name="zip" placeholder="Zip Code" value={formData.zip} onChange={handleChange} />
    <button className="next-btn" onClick={next}>Next ➡️</button>
  </div>
);
export default AddressForm;
