// src/components/layout/Header.jsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShoppingCart, FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const cartCount = getCartCount();

  return (
    <motion.header
      className={`header ${isScrolled ? 'header-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="logo-text">🍕 Pizzaburg</span>
          </Link>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link></li>
            <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
            {isAdmin() && (
              <li><Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>Admin</Link></li>
            )}
          </ul>

          <div className="nav-actions">
            {user ? (
              <div className="user-menu">
                <span className="user-name">Hi, {user.name.split(' ')[0]}</span>
                <button onClick={handleLogout} className="btn-icon" aria-label="Logout">
                  <FiLogOut />
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-icon" aria-label="Login">
                <FiUser />
              </Link>
            )}
            
            <Link to="/cart" className="cart-icon" aria-label="Shopping Cart">
              <FiShoppingCart />
              {cartCount > 0 && (
                <motion.span
                  className="cart-badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  key={cartCount}
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;