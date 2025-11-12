// src/components/admin/OrdersManagement.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';
import './OrdersManagement.css';

const OrdersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      items: 'Margherita Pizza x2, Pepperoni Pizza x1',
      total: 45.99,
      status: 'Delivered',
      date: '2024-01-15'
    },
    {
      id: '#ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      items: 'Hawaiian Pizza x1, Garlic Bread x2',
      total: 32.50,
      status: 'Pending',
      date: '2024-01-15'
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      items: 'BBQ Chicken x2, Coca Cola x3',
      total: 67.80,
      status: 'Processing',
      date: '2024-01-14'
    },
    {
      id: '#ORD-004',
      customer: 'Sarah Williams',
      email: 'sarah@example.com',
      items: 'Vegetarian Delight x1, Onion Pizza x1',
      total: 54.20,
      status: 'Delivered',
      date: '2024-01-14'
    },
    {
      id: '#ORD-005',
      customer: 'Tom Brown',
      email: 'tom@example.com',
      items: 'Mexicana Pizza x1',
      total: 28.90,
      status: 'Cancelled',
      date: '2024-01-13'
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'Delivered':
        return 'status-delivered';
      case 'Processing':
        return 'status-processing';
      case 'Pending':
        return 'status-pending';
      case 'Cancelled':
        return 'status-cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="orders-management">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Orders Management
      </motion.h1>

      <motion.div
        className="filters-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by order ID or customer..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <FiFilter className="filter-icon" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        className="orders-table-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Items</th>
              <th>Total</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="order-id">{order.id}</td>
                <td className="customer-name">{order.customer}</td>
                <td className="customer-email">{order.email}</td>
                <td className="order-items">{order.items}</td>
                <td className="order-total">${order.total.toFixed(2)}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="no-results">
            <p>No orders found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default OrdersManagement;