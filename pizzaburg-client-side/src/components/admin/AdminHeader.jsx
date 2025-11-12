// src/components/admin/AdminHeader.jsx
import { FiMenu, FiBell, FiUser } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import './AdminHeader.css';

const AdminHeader = ({ toggleSidebar }) => {
  const { user } = useAuth();

  return (
    <header className="admin-header">
      <button
        className="menu-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <FiMenu />
      </button>

      <div className="header-actions">
        <button className="header-btn" aria-label="Notifications">
          <FiBell />
          <span className="notification-badge">3</span>
        </button>

        <div className="admin-user">
          <div className="user-avatar">
            <FiUser />
          </div>
          <div className="user-info">
            <span className="user-name">{user?.name}</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;