import React from 'react';
import { FaCoins, FaUsers, FaShoppingBag, FaGem } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-icon">
            <FaCoins />
          </div>
          <div className="stat-details">
            <h3>Sales</h3>
            <p className="stat-value">₹85,000</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaUsers />
          </div>
          <div className="stat-details">
            <h3>Customers</h3>
            <p className="stat-value">320</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaShoppingBag />
          </div>
          <div className="stat-details">
            <h3>Orders</h3>
            <p className="stat-value">120</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <FaGem />
          </div>
          <div className="stat-details">
            <h3>Products</h3>
            <p className="stat-value">54</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <p className="activity-time">Today, 10:30 AM</p>
            <p className="activity-desc">New order #1234 received for Gold Necklace</p>
          </div>
          <div className="activity-item">
            <p className="activity-time">Today, 9:15 AM</p>
            <p className="activity-desc">Customer feedback received for Diamond Ring</p>
          </div>
          <div className="activity-item">
            <p className="activity-time">Yesterday, 4:45 PM</p>
            <p className="activity-desc">Inventory updated for Silver Bracelets</p>
          </div>
          <div className="activity-item">
            <p className="activity-time">Yesterday, 2:30 PM</p>
            <p className="activity-desc">New customer registered: Priya Sharma</p>
          </div>
          <div className="activity-item">
            <p className="activity-time">Yesterday, 11:20 AM</p>
            <p className="activity-desc">Order #1230 status changed to Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;