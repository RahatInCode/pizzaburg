// src/pages/NotFound.jsx
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="error-code">404</div>
        <h1>Oops! Pizza Not Found</h1>
        <p>The page you're looking for seems to have been eaten already!</p>
        <div className="pizza-emoji">🍕</div>
        <Link to="/" className="btn btn-primary">
          <FiHome /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;