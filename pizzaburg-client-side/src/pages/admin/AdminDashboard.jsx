// src/pages/admin/AdminDashboard.jsx
import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';
import DashboardHome from '../../components/admin/DashboardHome';
import OrdersManagement from '../../components/admin/OrdersManagement';
import ProductsManagement from '../../components/admin/ProductsManagement';
import SettingsPage from '../../components/admin/SettingsPage';
import './AdminDashboard.css';
import UsersManagement from '../../components/admin/UserManagement';

const AdminDashboard = () => {
  const { isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="admin-dashboard">
      <AdminSidebar isOpen={sidebarOpen} />
      <div className={`admin-main ${sidebarOpen ? '' : 'sidebar-closed'}`}>
        <AdminHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="admin-content">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="orders" element={<OrdersManagement />} />
            <Route path="products" element={<ProductsManagement />} />
            <Route path="users" element={<UsersManagement/>} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;