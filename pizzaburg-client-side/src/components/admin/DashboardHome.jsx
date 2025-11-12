// src/components/admin/DashboardHome.jsx
import { motion } from 'framer-motion';
import {
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
  FiTrendingUp
} from 'react-icons/fi';
import './DashboardHome.css';

const DashboardHome = () => {
  const stats = [
    {
      icon: <FiDollarSign />,
      label: 'Total Revenue',
      value: '$12,345',
      change: '+12.5%',
      positive: true
    },
    {
      icon: <FiShoppingBag />,
      label: 'Total Orders',
      value: '234',
      change: '+8.2%',
      positive: true
    },
    {
      icon: <FiUsers />,
      label: 'Total Customers',
      value: '1,234',
      change: '+15.3%',
      positive: true
    },
    {
      icon: <FiTrendingUp />,
      label: 'Growth Rate',
      value: '23.5%',
      change: '+4.1%',
      positive: true
    }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', total: '$45.99', status: 'Delivered' },
    { id: '#ORD-002', customer: 'Jane Smith', total: '$32.50', status: 'Pending' },
    { id: '#ORD-003', customer: 'Mike Johnson', total: '$67.80', status: 'Processing' },
    { id: '#ORD-004', customer: 'Sarah Williams', total: '$54.20', status: 'Delivered' },
    { id: '#ORD-005', customer: 'Tom Brown', total: '$28.90', status: 'Cancelled' }
  ];

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
    <div className="dashboard-home">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Dashboard Overview
      </motion.h1>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
              <span className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="recent-orders"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2>Recent Orders</h2>
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td className="order-total">{order.total}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardHome;