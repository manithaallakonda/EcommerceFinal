import React, { useState } from "react";
import "./Confirmation.css";

const Confirmation = () => {
  const [address, setAddress] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const handlePayment = () => {
    setPaymentStatus("Processing...");
    setTimeout(() => {
      setPaymentStatus("Paid ✅");
    }, 2000);
  };

  return (
    <div className="confirmation-page">
      <h2>Confirm Your Order</h2>

      <div className="confirmation-section">
        <h3>Delivery Address</h3>
        <textarea
          rows={4}
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="confirmation-section">
        <h3>Payment Status</h3>
        <p>Status: {paymentStatus}</p>
        <button onClick={handlePayment} disabled={paymentStatus !== "Pending"}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
