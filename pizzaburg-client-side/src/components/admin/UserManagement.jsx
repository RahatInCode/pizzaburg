// src/components/admin/UsersManagement.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './UsersManagement.css';

const UsersManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@pizzaburg.com',
      role: 'admin',
      orders: 0,
      joined: '2023-01-01'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'user@example.com',
      role: 'user',
      orders: 15,
      joined: '2023-06-15'
    },
    {
      id: 3,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      orders: 23,
      joined: '2023-08-20'
    },
    {
      id: 4,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'user',
      orders: 8,
      joined: '2023-11-05'
    },
    {
      id: 5,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'user',
      orders: 31,
      joined: '2023-03-12'
    }
  ]);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (id === 1) {
      toast.error('Cannot delete admin user');
      return;
    }
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
      toast.success('User deleted successfully');
    }
  };

  return (
    <div className="users-management">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Users Management
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
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </motion.div>

      <motion.div
        className="users-table-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Orders</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="user-id">#{user.id}</td>
                <td className="user-name">{user.name}</td>
                <td className="user-email">{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role === 'admin' ? 'role-admin' : 'role-user'}`}>
                    {user.role}
                  </span>
                </td>
                <td>{user.orders}</td>
                <td>{user.joined}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn-action btn-edit"
                      aria-label="Edit user"
                      onClick={() => toast.info('Edit functionality coming soon')}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="btn-action btn-delete"
                      aria-label="Delete user"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="no-results">
            <p>No users found</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UsersManagement;