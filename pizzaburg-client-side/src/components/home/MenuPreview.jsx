// src/components/home/MenuPreview.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FiArrowRight } from 'react-icons/fi';
import products from '../../assets/data/products'; // Changed
import ProductCard from '../common/ProductCard';
import './MenuPreview.css';

const MenuPreview = () => {
  const popularProducts = products.filter(p => p.popular).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="section menu-preview">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Browse Our Menu</h2>
          <p className="section-subtitle">
            Discover our most loved pizzas, handcrafted with passion and premium ingredients
          </p>
        </motion.div>

        <motion.div
          className="menu-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <motion.div
          className="menu-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/menu" className="btn btn-primary">
            View Full Menu <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;