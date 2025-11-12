// src/components/admin/AdminSidebar.jsx
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome,
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiSettings,
  FiX
} from 'react-icons/fi';
import './AdminSidebar.css';

const AdminSidebar = ({ isOpen }) => {
  const menuItems = [
    { path: '/admin', icon: <FiHome />, label: 'Dashboard', end: true },
    { path: '/admin/orders', icon: <FiShoppingBag />, label: 'Orders' },
    { path: '/admin/products', icon: <FiPackage />, label: 'Products' },
    { path: '/admin/users', icon: <FiUsers />, label: 'Users' },
    { path: '/admin/settings', icon: <FiSettings />, label: 'Settings' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.aside
            className="admin-sidebar"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.3 }}
          >
            <div className="sidebar-header">
              <h2>🍕 Pizzaburg Admin</h2>
            </div>

            <nav className="sidebar-nav">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="link-icon">{item.icon}</span>
                  <span className="link-label">{item.label}</span>
                </NavLink>
              ))}
            </nav>

            <div className="sidebar-footer">
              <p>Admin Panel v1.0</p>
            </div>
          </motion.aside>

          <motion.div
            className="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {}}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default AdminSidebar;