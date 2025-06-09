import React from 'react';
import { FaCheck, FaClock, FaShoppingBag } from 'react-icons/fa';

function OrderSection() {
  const orders = [
    { id: 'ORD-001', product: 'Diamond Ring', customer: 'Rahul Sharma', status: 'Delivered', date: '2023-06-01', amount: '₹12,500' },
    { id: 'ORD-002', product: 'Gold Necklace', customer: 'Priya Patel', status: 'Pending', date: '2023-06-02', amount: '₹28,000' },
    { id: 'ORD-003', product: 'Silver Bracelet', customer: 'Amit Kumar', status: 'Delivered', date: '2023-06-03', amount: '₹5,200' },
    { id: 'ORD-004', product: 'Pearl Earrings', customer: 'Neha Singh', status: 'Pending', date: '2023-06-04', amount: '₹3,800' },
    { id: 'ORD-005', product: 'Platinum Band', customer: 'Vikram Mehta', status: 'Delivered', date: '2023-06-05', amount: '₹15,000' },
    { id: 'ORD-006', product: 'Ruby Pendant', customer: 'Sneha Gupta', status: 'Pending', date: '2023-06-06', amount: '₹9,500' },
    { id: 'ORD-007', product: 'Emerald Ring', customer: 'Raj Malhotra', status: 'Delivered', date: '2023-06-07', amount: '₹18,200' },
    { id: 'ORD-008', product: 'Sapphire Earrings', customer: 'Ananya Reddy', status: 'Delivered', date: '2023-06-08', amount: '₹7,800' }
  ];

  const totalOrders = orders.length;
  const pendingOrders = orders.filter(order => order.status === 'Pending').length;
  const deliveredOrders = orders.filter(order => order.status === 'Delivered').length;

  return (
    <div className="order-section">
      <h1>Order Management</h1>
      
      <div className="order-summary">
        <div className="summary-card">
          <div className="summary-icon">
            <FaShoppingBag />
          </div>
          <div className="summary-details">
            <h3>Total Orders</h3>
            <p>{totalOrders}</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon pending">
            <FaClock />
          </div>
          <div className="summary-details">
            <h3>Pending Orders</h3>
            <p>{pendingOrders}</p>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon delivered">
            <FaCheck />
          </div>
          <div className="summary-details">
            <h3>Delivered Orders</h3>
            <p>{deliveredOrders}</p>
          </div>
        </div>
      </div>

      <div className="orders-table-container">
        <h2>Recent Orders</h2>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.customer}</td>
                <td>
                  <span className={`status-badge ${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderSection;