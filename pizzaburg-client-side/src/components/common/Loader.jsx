// src/components/common/Loader.jsx
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="loader-pizza"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        🍕
      </motion.div>
      <motion.p
        className="loader-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Loading Your Delicious Experience...
      </motion.p>
    </motion.div>
  );
};

export default Loader;