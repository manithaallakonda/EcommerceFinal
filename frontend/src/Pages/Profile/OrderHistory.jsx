import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import { backend_url } from '../../App';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    axios.get(`${backend_url}/orders`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setOrders(res.data));
  }, []);

  return (
    <div className="order-history">
      <h2>📦 Order History</h2>
      {orders.length === 0 ? (
        <p>No past orders.</p>
      ) : (
        orders.map(order => (
          <div className="order-card" key={order.id}>
            <h4>Order #{order.id}</h4>
            <p>Status: {order.status}</p>
            <p>Total: ₹{order.total}</p>
            <a
              href={`${backend_url}/orders/invoice/${order.id}`}
              target="_blank"
              rel="noopener noreferrer" // ✅ Added to fix security warning
            >
              Download Invoice
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;
